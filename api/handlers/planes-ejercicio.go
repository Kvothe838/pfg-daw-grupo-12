package api

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type planEjercicio struct {
	URL         string `json:"url"`
	Descripcion string `json:"descripcion"`
}

var planesEjercicios = []planEjercicio{
	{
		URL:         "https://t1.uc.ltmcdn.com/es/posts/0/0/8/zancadas_estocadas_o_lounge_50800_2_600.webp",
		Descripcion: "Ponte de pie con la columna recta.\nSepara los pies a la anchura de la cadera.\nDa un paso largo, llevando una pierna adelante. Dobla la rodilla lo más que puedas hasta alcanzar un ángulo 90 grados.\nBaja la rodilla trasera cerca del suelo, pero sin tocarlo. Apoya solo los dedos del pie.\nSentirás tensión en los músculos de la pierna que tienes adelante y en la zona del glúteo de la pierna que queda atrás.\nHaz 20 repeticiones, alternando la pierna izquierda con la derecha.",
	},
}

func GetPlanesEjercicios(c *gin.Context) {
	c.JSON(http.StatusOK, planesEjercicios)
}
