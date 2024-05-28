package services

import (
	"pfg-daw-grupo-12-backend/backend/internal/database"
	"pfg-daw-grupo-12-backend/backend/internal/models"
)

type planesEjercicios struct {
	DB database.Database
}

func NewPlanesEjercicios(db database.Database) *planesEjercicios {
	return &planesEjercicios{}
}

func (p *planesEjercicios) GetAll() ([]models.PlanEjercicio, error) {
	return p.DB.GetAllPlanesEjercicios()
}
