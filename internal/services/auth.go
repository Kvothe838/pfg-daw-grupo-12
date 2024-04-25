package services

import (
	"github.com/samber/lo"
	"pfg-daw-grupo-12-backend/internal/errors"
	"pfg-daw-grupo-12-backend/internal/models"
	"slices"
)

var users = make([]models.User, 0)

func Registrar(username, password string) error {
	usernameAlreadyRegistered := slices.ContainsFunc(users, func(user models.User) bool {
		return user.Username == username
	})

	if usernameAlreadyRegistered {
		return errors.ExistentUserErr
	}

	newUser := models.User{
		Username: username,
		Password: password,
	}

	users = append(users, newUser)

	return nil
}

func Acceder(username, password string) error {
	user, found := lo.Find(users, func(user models.User) bool {
		return user.Username == username
	})

	if !found {
		return errors.LoginFailedErr
	}

	if user.Password != password {
		return errors.LoginFailedErr
	}

	return nil
}
