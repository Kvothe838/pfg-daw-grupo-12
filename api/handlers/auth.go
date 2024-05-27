package api

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"pfg-daw-grupo-12-backend/internal/errors"
	"pfg-daw-grupo-12-backend/internal/models"
)

type authService interface {
	Login(email, password string) error
	Register(email, password string) error
}

type planesEjerciciosService interface {
	GetAll() ([]models.PlanEjercicio, error)
}

func NewInteractor(auth authService, planesEjercicios planesEjerciciosService) interactor {
	return interactor{
		auth:             auth,
		planesEjercicios: planesEjercicios,
	}
}

func (i interactor) Register(ctx *gin.Context) {
	var request struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	err := ctx.BindJSON(&request)
	if err != nil {
		ctx.AbortWithStatus(http.StatusBadRequest)
		return
	}

	err = i.auth.Register(request.Email, request.Password)
	if err != nil {
		if err == errors.ExistentUserErr {
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

func (i interactor) Login(ctx *gin.Context) {
	ctx.Header("Access-Control-Allow-Origin", "*")
	ctx.Header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
	ctx.Header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")

	var request struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	err := ctx.BindJSON(&request)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Invalid request"})
		return
	}

	err = i.auth.Login(request.Email, request.Password)
	if err != nil {
		if err == errors.LoginFailedErr {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"message": "nombre de usuario o contraseña incorrecto",
			})
			return
		}

		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Internal server error"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Login successful"})
}
