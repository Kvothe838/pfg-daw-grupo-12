package models

type PlanEjercicio struct {
	ID          int64   `json:"id"`
	Nombre      string  `json:"nombre"`
	Descripcion string  `json:"descripcion"`
	Ejercicios  string  `json:"ejercicios"`
	CreadoPor   Usuario `json:"creado_por"`
	EditadoPor  Usuario `json:"editado_por"`
}
