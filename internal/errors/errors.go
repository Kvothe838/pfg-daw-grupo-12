package errors

import "errors"

var ExistentUserErr = errors.New("user already exists")
var LoginFailedErr = errors.New("login failed")
