package services

import (
	"github.com/samber/lo"
	"pfg-daw-grupo-12-backend/internal/errors"
	"pfg-daw-grupo-12-backend/internal/models"
	"slices"
)

var users = []models.User{
	{
		Email:    "example@gmail.com",
		Password: "Random123.",
	},
}

type auth struct {
}

func NewAuth() auth {
	return auth{}
}

func (a auth) Register(email, password string) error {
	usernameAlreadyRegistered := slices.ContainsFunc(users, func(user models.User) bool {
		return user.Email == email
	})

	if usernameAlreadyRegistered {
		return errors.ExistentUserErr
	}

	newUser := models.User{
		Email:    email,
		Password: password,
	}

	users = append(users, newUser)

	return nil
}

func (a auth) Login(email, password string) error {
	user, found := lo.Find(users, func(user models.User) bool {
		return user.Email == email
	})

	if !found {
		return errors.LoginFailedErr
	}

	if user.Password != password {
		return errors.LoginFailedErr
	}

	return nil
}
