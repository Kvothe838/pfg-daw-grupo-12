package api

import (
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"net/http"
	"pfg-daw-grupo-12-backend/backend/internal/errors"
	"pfg-daw-grupo-12-backend/backend/internal/services"
)

type authService interface {
	Login(email, contrasenia string) (string, error)
	Register(email, contrasenia string) error
}

func NewInteractor(auth authService, planesEjercicios planesEjerciciosService) *interactor {
	return &interactor{
		auth:             auth,
		planesEjercicios: planesEjercicios,
	}
}

func (i *interactor) Register(ctx *gin.Context) {
	var request struct {
		Email       string `json:"email"`
		Contrasenia string `json:"contrasenia"`
	}

	err := ctx.BindJSON(&request)
	if err != nil {
		ctx.AbortWithStatus(http.StatusBadRequest)
		return
	}

	err = i.auth.Register(request.Email, request.Contrasenia)
	if err != nil {
		if err == errors.UsuarioExistenteErr {
			ctx.AbortWithStatusJSON(http.StatusConflict, gin.H{
				"message": err.Error(),
			})
			return
		}

		ctx.AbortWithStatus(http.StatusInternalServerError)
		fmt.Println("error registrando usuario: ", err)
		return
	}

	ctx.Status(http.StatusOK)

}

func (i *interactor) Login(ctx *gin.Context) {
	var request struct {
		Email       string `json:"email"`
		Contrasenia string `json:"contrasenia"`
	}

	err := ctx.BindJSON(&request)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Solicitud inválida"})
		return
	}

	if len(request.Email) == 0 || len(request.Contrasenia) == 0 {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"message": "Email o contrasenia no enviados",
		})
		return
	}

	token, err := i.auth.Login(request.Email, request.Contrasenia)
	if err != nil {
		if err == errors.FalloLoginErr || err == errors.SesionExpiradaErr {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"message": "Nombre de usuario o contraseña incorrecto",
			})
			return
		}

		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Internal server error"})
		return
	}

	ctx.SetCookie("loginToken", token, 3600*24, "/", "http://localhost:3000/", false, true)

	ctx.JSON(http.StatusOK, gin.H{"message": "Login exitoso"})
}

func AuthMiddleware(jwtSecretKey string) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		tokenString, err := ctx.Cookie("loginToken")
		if err != nil {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "No se encontró token"})
			return
		}

		claims := &services.Claims{}
		token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
			return []byte(jwtSecretKey), nil
		})

		if err != nil || !token.Valid {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Token inválido"})
			return
		}

		if claims.ExpiresAt < jwt.TimeFunc().Unix() {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Token expirado"})
			return
		}

		ctx.Set("usuarioID", claims.UsuarioID)
		ctx.Next()
	}
}
