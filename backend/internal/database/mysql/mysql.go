package mysql

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/pkg/errors"
	"pfg-daw-grupo-12-backend/backend/internal/models"
)

type conn struct {
	Driver *sql.DB
}

func NewConn(user, password, dbName string) (*conn, error) {
	dsn := fmt.Sprintf("%s:%s@tcp(127.0.0.1:3306)/%s?parseTime=true", user, password, dbName)

	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return nil, errors.Wrap(err, "Error al abrir la conexión")
	}

	err = db.Ping()
	if err != nil {
		errors.Wrap(err, "Error al conectar a la base de datos")
	}

	fmt.Println("Conexión exitosa a la base de datos MySQL")

	return &conn{Driver: db}, nil
}

func (c *conn) GetPlanesEjercicios() ([]models.PlanEjercicio, error) {
	rows, err := c.Driver.Query(`
		SELECT id, nombre, descripcion, ejercicios, creado_por_id, editado_por_id
		FROM planes_ejercicios
		WHERE borrado = 0`)
	if err != nil {
		return nil, errors.Wrap(err, "no se pudo ejecutar query")
	}

	defer rows.Close()

	planes := make([]models.PlanEjercicio, 0)
	for rows.Next() {
		var plan models.PlanEjercicio
		var (
			creadoPorID  int64
			editadoPorID int64
		)

		if err := rows.Scan(&plan.ID, &plan.Nombre, &plan.Descripcion, &plan.Ejercicios, &creadoPorID, &editadoPorID); err != nil {
			return nil, errors.Wrap(err, "no se pudo escanear el resultado de la consulta GetPlanesEjercicios")
		}

		creadoPor, err := c.getUsuarioByID(creadoPorID)
		if err != nil {
			return nil, errors.Wrap(err, "no se pudo obtener usuario que creó el plan")
		}

		if creadoPor == nil {
			return nil, errors.Wrapf(err, "no existe usuario creador de plan para id %d", creadoPorID)
		}

		editadoPor, err := c.getUsuarioByID(editadoPorID)
		if err != nil {
			return nil, errors.Wrap(err, "no se pudo obtener usuario que editó el plan")
		}

		if editadoPor == nil {
			return nil, errors.Wrapf(err, "no existe usuario editor de plan para id %d", editadoPorID)
		}

		plan.CreadoPor = *creadoPor
		plan.EditadoPor = *editadoPor

		planes = append(planes, plan)
	}

	if err := rows.Err(); err != nil {
		return nil, errors.Wrap(err, "ocurrió un error al obtener los resultados")
	}

	return planes, nil
}

func (c *conn) CreatePlanEjercicio(plan models.PlanEjercicio) error {
	_, err := c.Driver.Exec(`
		INSERT INTO planes_ejercicios(nombre, descripcion, ejercicios, creado_por_id, editado_por_id)
		VALUES(?, ?, ?, ?, ?)
	`, plan.Nombre, plan.Descripcion, plan.Ejercicios, plan.CreadoPor.ID, plan.EditadoPor.ID)

	if err != nil {
		return errors.Wrap(err, "no se pudo ejecutar query para CREAR plan de ejercicio")
	}

	return nil
}

func (c *conn) UpdatePlanEjercicio(plan models.PlanEjercicio) error {
	_, err := c.Driver.Exec(`
		UPDATE planes_ejercicios
		SET nombre=?, descripcion=?, ejercicios=?, editado_por_id=?
		WHERE id=?
	`, plan.Nombre, plan.Descripcion, plan.Ejercicios, plan.EditadoPor.ID, plan.ID)

	if err != nil {
		return errors.Wrap(err, "no se pudo ejecutar query para actualizar plan de ejercicio")
	}

	return nil
}

func (c *conn) GetPlanEjercicio(planID int64) (*models.PlanEjercicio, error) {
	row := c.Driver.QueryRow(`
		SELECT id, nombre, descripcion, ejercicios, creado_por_id, editado_por_id
		FROM planes_ejercicios
		WHERE id = ? AND borrado = 0`, planID)
	var (
		plan                      models.PlanEjercicio
		creadoPorID, editadoPorID int64
	)

	err := row.Scan(&plan.ID, &plan.Nombre, &plan.Descripcion, &plan.Ejercicios, &creadoPorID, &editadoPorID)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}

		return nil, errors.Wrap(err, "error al escanear el resultado de la consulta GetPlanEjercicio")
	}

	creadoPor, err := c.getUsuarioByID(creadoPorID)
	if err != nil {
		return nil, errors.Wrap(err, "no se pudo obtener usuario que creó el plan")
	}

	if creadoPor == nil {
		return nil, errors.Wrapf(err, "no existe usuario creador de plan para id %d", creadoPorID)
	}

	editadoPor, err := c.getUsuarioByID(editadoPorID)
	if err != nil {
		return nil, errors.Wrap(err, "no se pudo obtener usuario que editó el plan")
	}

	if editadoPor == nil {
		return nil, errors.Wrapf(err, "no existe usuario editor de plan para id %d", editadoPorID)
	}

	plan.CreadoPor = *creadoPor
	plan.EditadoPor = *editadoPor

	return &plan, nil
}

func (c *conn) getUsuarioByID(ID int64) (*models.Usuario, error) {
	row := c.Driver.QueryRow(`
		SELECT *
		FROM usuarios
		WHERE id = ?`, ID)
	var (
		usuario models.Usuario
		rolID   int64
	)

	err := row.Scan(&usuario.ID, &usuario.Email, &usuario.Contrasenia, &rolID, &usuario.FechaCreacion)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}

		return nil, errors.Wrap(err, "no se pudo escanear el resultado de la consulta getUsuarioByID")
	}

	return &usuario, nil
}

func (c *conn) GetUsuarioByEmail(email string) (*models.Usuario, error) {
	row := c.Driver.QueryRow(`
		SELECT *
		FROM usuarios
		WHERE email = ?`, email)
	var (
		usuario models.Usuario
		rolID   int64
	)

	err := row.Scan(&usuario.ID, &usuario.Email, &usuario.Contrasenia, &rolID, &usuario.FechaCreacion)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}

		return nil, errors.Wrap(err, "error al escanear el resultado de la consulta GetUsuarioByEmail")
	}

	return &usuario, nil
}

func (c *conn) CreateUsuario(email, contrasenia string) error {
	_, err := c.Driver.Exec(`
		INSERT INTO usuarios(email, contrasenia)
		VALUES(?, ?)`, email, contrasenia)
	if err != nil {
		return errors.Wrap(err, "no se pudo ejecutar query para crear usuario")
	}

	return nil
}
