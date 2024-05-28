package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	api "pfg-daw-grupo-12-backend/api/handlers"
	"pfg-daw-grupo-12-backend/internal/database/mysql"
	"pfg-daw-grupo-12-backend/internal/services"
)

func main() {
	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Authorization"}

	router.Use(cors.New(config))

	dbConnection, err := mysql.NewConn("root", "root", "test")
	if err != nil {
		panic(err)
	}

	defer dbConnection.Driver.Close()

	jwtSecretKey := "secret"
	authService := services.NewAuth(dbConnection, jwtSecretKey)
	planesEjerciciosService := services.NewPlanesEjercicios(dbConnection)
	interactor := api.NewInteractor(authService, planesEjerciciosService)
	router.POST("/login", interactor.Login)
	router.POST("/register", interactor.Register)
	router.GET("/planes-ejercicios", interactor.GetPlanesEjercicios)

	admin := router.Group("/admin")
	admin.Use(api.AuthMiddleware(jwtSecretKey))

	router.Run("localhost:8080")
}
