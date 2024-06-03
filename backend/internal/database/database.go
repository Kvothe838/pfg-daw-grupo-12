package database

import (
	"pfg-daw-grupo-12-backend/backend/internal/models"
)

type Database interface {
	CreatePlanEjercicio(models.PlanEjercicio) error
	GetPlanesEjercicios() ([]models.PlanEjercicio, error)
	GetPlanEjercicio(planID int64) (*models.PlanEjercicio, error)
	UpdatePlanEjercicio(models.PlanEjercicio) error
	DeletePlanEjercicio(planID, editadoPorID int64) error
	GetUsuarioByEmail(email string) (*models.Usuario, error)
	CreateUsuario(email, nombreUsuario, contrasenia string) error
}
