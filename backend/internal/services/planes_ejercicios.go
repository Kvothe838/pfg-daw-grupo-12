package services

import (
	"github.com/pkg/errors"
	"pfg-daw-grupo-12-backend/backend/internal/database"
	"pfg-daw-grupo-12-backend/backend/internal/models"
)

type planesEjercicios struct {
	DB database.Database
}

func NewPlanesEjercicios(DB database.Database) *planesEjercicios {
	return &planesEjercicios{DB: DB}
}

func (p *planesEjercicios) Create(nombre, descripcion, ejercicios string, creadoPorID int64) error {
	plan := models.PlanEjercicio{
		Nombre:      nombre,
		Descripcion: descripcion,
		Ejercicios:  ejercicios,
		CreadoPor:   models.Usuario{ID: creadoPorID},
		EditadoPor:  models.Usuario{ID: creadoPorID},
	}

	err := p.DB.CreatePlanEjercicio(plan)
	if err != nil {
		return errors.Wrap(err, "no se pudo crear plan de ejercicio")
	}

	return nil
}

func (p *planesEjercicios) GetAll() ([]models.PlanEjercicio, error) {
	planes, err := p.DB.GetPlanesEjercicios()
	if err != nil {
		return nil, errors.Wrap(err, "no se pudieron obtener todos los planes de ejercicio")
	}

	return planes, nil
}

func (p *planesEjercicios) Get(planID int64) (*models.PlanEjercicio, error) {
	plan, err := p.DB.GetPlanEjercicio(planID)
	if err != nil {
		return nil, errors.Wrapf(err, "no se pudo obtener plan de ejercicio con ID %d", planID)
	}

	return plan, nil
}

func (p *planesEjercicios) Update(planID int64, nombre, descripcion, ejercicios string, editadoPorID int64) error {
	planExistente, err := p.Get(planID)
	if err != nil {
		return errors.Wrap(err, "no se pudo obtener plan para actualizar")
	}

	if planExistente == nil {
		return errors.Wrap(err, "el plan no existe")
	}

	planExistente.Nombre = nombre
	planExistente.Descripcion = descripcion
	planExistente.Ejercicios = ejercicios
	planExistente.EditadoPor = models.Usuario{ID: editadoPorID}

	err = p.DB.UpdatePlanEjercicio(*planExistente)
	if err != nil {
		return errors.Wrapf(err, "no se pudo actualizar plan de ejercicio con id %d", planID)
	}

	return nil
}
