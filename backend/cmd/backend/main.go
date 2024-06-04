package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"pfg-daw-grupo-12-backend/backend/api/handlers"
	"pfg-daw-grupo-12-backend/backend/internal/database/mysql"
	services2 "pfg-daw-grupo-12-backend/backend/internal/services"
)

func main() {
	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Authorization"}
	config.AllowCredentials = true

	router.Use(cors.New(config))

	dbConnection, err := mysql.NewConn("root", "", "test")
	if err != nil {
		panic(err)
	}

	defer dbConnection.Driver.Close()

	jwtSecretKey := "secret"
	authService := services2.NewAuth(dbConnection, jwtSecretKey)
	planesEjerciciosService := services2.NewPlanesEjercicios(dbConnection)
	interactor := api.NewInteractor(authService, planesEjerciciosService)
	router.POST("/login", interactor.Login)
	router.POST("/register", interactor.Register)
	router.GET("/planes-ejercicios", interactor.GetPlanesEjercicios)

	admin := router.Group("/admin")
	admin.Use(api.AuthMiddleware(jwtSecretKey))
	admin.POST("/planes-ejercicios", interactor.CreatePlanEjercicios)
	admin.PUT("/planes-ejercicios", interactor.UpdatePlanEjercicios)
	admin.DELETE("/planes-ejercicios", interactor.DeletePlanEjercicios)

	router.Run("localhost:8080")
}
