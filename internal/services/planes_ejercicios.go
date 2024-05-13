package services

import "pfg-daw-grupo-12-backend/internal/models"

type planesEjercicios struct{}

func NewPlanesEjercicios() planesEjercicios {
	return planesEjercicios{}
}

var planesEjerciciosMock = []models.PlanEjercicio{
	{
		Name:        "Guerrero principiante",
		Description: "¿Eres nuevo en el ejercicio? ¡No te preocupes! Nuestro plan ha sido creado pensando en ti.",
		Plan:        "Día 1: Entrenamiento de Fuerza y Potencia (...)",
	},
}

func (p planesEjercicios) GetAll() ([]models.PlanEjercicio, error) {
	return planesEjerciciosMock, nil
}
