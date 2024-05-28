package errors

import "errors"

var (
	UsuarioExistenteErr = errors.New("usuario ya existente")
	FalloLoginErr       = errors.New("fallo al intentar hacer login")
	SesionExpiradaErr   = errors.New("sesión expirada")
)
