package main

import (
	"github.com/gin-gonic/gin"
	api "pfg-daw-grupo-12-backend/api/handlers"
	"pfg-daw-grupo-12-backend/internal/services"
)

func main() {
	router := gin.Default()

	authService := services.NewAuth()
	planesEjerciciosService := services.NewPlanesEjercicios()
	interactor := api.NewInteractor(authService, planesEjerciciosService)

	router.POST("/login", interactor.Login)
	router.POST("/register", interactor.Register)
	router.GET("/planes-ejercicios", interactor.GetPlanesEjercicios)

	router.Run("localhost:8080")
}
