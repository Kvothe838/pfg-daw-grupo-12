package database

import (
	models2 "pfg-daw-grupo-12-backend/backend/internal/models"
)

type Database interface {
	GetAllPlanesEjercicios() ([]models2.PlanEjercicio, error)
	GetUsuarioByEmail(email string) (*models2.Usuario, error)
	CreateUsuario(email, contrasenia string) error
}
