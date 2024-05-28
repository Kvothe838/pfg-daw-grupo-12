package database

import "pfg-daw-grupo-12-backend/internal/models"

type Database interface {
	GetAllPlanesEjercicios() ([]models.PlanEjercicio, error)
	GetUsuarioByEmail(email string) (*models.Usuario, error)
	CreateUsuario(email, contrasenia string) error
}
