package api

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"pfg-daw-grupo-12-backend/internal/errors"
	"pfg-daw-grupo-12-backend/internal/services"
)

func Register(ctx *gin.Context) {
	var request struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}

	err := ctx.BindJSON(&request)
	if err != nil {
		ctx.AbortWithStatus(http.StatusBadRequest)
		return
	}

	err = services.Register(request.Username, request.Password)
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

func Login(ctx *gin.Context) {
	var request struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}

	err := ctx.BindJSON(&request)
	if err != nil {
		ctx.AbortWithStatus(http.StatusBadRequest)
		return
	}

	err = services.Login(request.Username, request.Password)
	if err == errors.LoginFailedErr {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"message": "nombre de usuario o contraseña incorrecto",
		})
	}
}
