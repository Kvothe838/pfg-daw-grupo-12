package main

import (
	"github.com/gin-gonic/gin"
	api "pfg-daw-grupo-12-backend/api/handlers"
)

func main() {
	router := gin.Default()
	router.POST("/login", api.Login)
	router.POST("/register", api.Register)
	router.GET("/planes-ejercicios", api.GetPlanesEjercicios)

	router.Run("localhost:8080")
}
