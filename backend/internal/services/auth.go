package services

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/pkg/errors"
	"pfg-daw-grupo-12-backend/backend/internal/database"
	internal_errors "pfg-daw-grupo-12-backend/backend/internal/errors"
	"time"
)

type auth struct {
	DB           database.Database // Assuming you have a database struct
	JWTSecretKey string
}

type Claims struct {
	UsuarioID int64 `json:"usuario_id"`
	jwt.StandardClaims
}

func NewAuth(DB database.Database, jwtSecretKey string) *auth {
	return &auth{DB: DB, JWTSecretKey: jwtSecretKey}
}

func (a *auth) Register(email, nombreUsuario, contrasenia string) error {
	usuario, err := a.DB.GetUsuarioByEmail(email)
	if err != nil {
		return errors.Wrap(err, "no se pudo obtener usuario por email")
	}

	usuarioYaRegistrado := usuario != nil

	if usuarioYaRegistrado {
		return internal_errors.UsuarioExistenteErr
	}

	err = a.DB.CreateUsuario(email, nombreUsuario, contrasenia)
	if err != nil {
		return errors.Wrap(err, "no se pudo crear usuario")
	}

	return nil
}

func (a *auth) Login(email, contrasenia string) (string, error) {
	usuario, err := a.DB.GetUsuarioByEmail(email)
	if err != nil {
		return "", errors.Wrap(err, "no se pudo obtener usuario por email")
	}

	if usuario == nil || usuario.Contrasenia != contrasenia {
		return "", internal_errors.FalloLoginErr
	}

	expirationTime := time.Now().Add(24 * time.Hour)
	claims := &Claims{
		UsuarioID: usuario.ID,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte(a.JWTSecretKey))
	if err != nil {
		return "", errors.Wrap(err, "no se pudo firmar el token")
	}

	return tokenString, nil
}
