package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	api "pfg-daw-grupo-12-backend/api/handlers"
	"pfg-daw-grupo-12-backend/internal/services"
)

func main() {
	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Authorization"}

	router.Use(cors.New(config))

	//mssql.Connect()

	authService := services.NewAuth()
	planesEjerciciosService := services.NewPlanesEjercicios()
	interactor := api.NewInteractor(authService, planesEjerciciosService)

	router.POST("/login", interactor.Login)
	router.POST("/register", interactor.Register)
	router.GET("/planes-ejercicios", interactor.GetPlanesEjercicios)

	router.Run("localhost:8080")
}
