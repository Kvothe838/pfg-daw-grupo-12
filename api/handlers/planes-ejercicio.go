package api

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func (i interactor) GetPlanesEjercicios(c *gin.Context) {
	planes, err := i.planesEjercicios.GetAll()
	if err != nil {
		fmt.Println("error obteniendo planes de ejercicio: ", err)
		c.AbortWithStatus(http.StatusInternalServerError)
		return
	}

	c.JSON(http.StatusOK, planes)
}
