package errors

import "errors"

var ExistentUserErr = errors.New("usuario ya existente")
var LoginFailedErr = errors.New("fallo al intentar hacer login")
