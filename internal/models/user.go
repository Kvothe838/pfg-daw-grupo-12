package models

import "time"

type Usuario struct {
	ID               int64
	Email            string
	Contrasenia      string
	FechaCreacion    time.Time
	SessionExpiresAt time.Time
}
