package models

import "time"

type Usuario struct {
	ID            int64     `json:"id"`
	Email         string    `json:"email"`
	Contrasenia   string    `json:"-"`
	FechaCreacion time.Time `json:"fecha_creacion"`
}
