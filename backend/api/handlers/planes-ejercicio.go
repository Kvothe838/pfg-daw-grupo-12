package api

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/pkg/errors"
	"net/http"
	"pfg-daw-grupo-12-backend/backend/internal/models"
	"strconv"
)

type planesEjerciciosService interface {
	Create(nombre, descripcion, ejercicios string, editadoPorID int64) error
	GetAll() ([]models.PlanEjercicio, error)
	Get(planID int64) (*models.PlanEjercicio, error)
	Update(planID int64, nombre, descripcion, ejercicios string, editadoPorID int64) error
}

func (i interactor) GetPlanesEjercicios(ctx *gin.Context) {
	planes, err := i.planesEjercicios.GetAll()
	if err != nil {
		fmt.Println("error obteniendo planes de ejercicio: ", err)
		ctx.AbortWithStatus(http.StatusInternalServerError)
		return
	}

	ctx.JSON(http.StatusOK, planes)
}

func (i interactor) CreatePlanEjercicios(ctx *gin.Context) {
	var req struct {
		Nombre      string `json:"nombre"`
		Descripcion string `json:"descripcion"`
		Ejercicios  string `json:"ejercicios"`
	}

	if err := ctx.BindJSON(&req); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	usuarioID := ctx.GetInt64("usuarioID")
	if usuarioID == 0 {
		ctx.AbortWithError(http.StatusUnauthorized, errors.New("no se ha encontrado ID de usuario en el token"))
		return
	}
	err := i.planesEjercicios.Create(req.Nombre, req.Descripcion, req.Ejercicios, usuarioID)
	if err != nil {
		ctx.AbortWithError(http.StatusInternalServerError, err)
		return
	}

	ctx.Status(http.StatusOK)
}

func (i interactor) UpdatePlanEjercicios(ctx *gin.Context) {
	var req struct {
		Nombre      string `json:"nombre"`
		Descripcion string `json:"descripcion"`
		Ejercicios  string `json:"ejercicios"`
	}

	if err := ctx.BindJSON(&req); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	planIDStr, _ := ctx.GetQuery("id")
	if len(planIDStr) == 0 {
		ctx.AbortWithError(http.StatusBadRequest, errors.New("id no enviado"))
		return
	}

	planID, err := strconv.ParseInt(planIDStr, 10, 64)
	if err != nil {
		ctx.AbortWithError(http.StatusBadRequest, errors.New("id debe ser un número"))
		return
	}

	usuarioID := ctx.GetInt64("usuarioID")
	if usuarioID == 0 {
		ctx.AbortWithError(http.StatusUnauthorized, errors.New("no se ha encontrado ID de usuario en el token"))
		return
	}

	err = i.planesEjercicios.Update(planID, req.Nombre, req.Descripcion, req.Ejercicios, usuarioID)
	if err != nil {
		ctx.AbortWithError(http.StatusInternalServerError, err)
		return
	}
}
