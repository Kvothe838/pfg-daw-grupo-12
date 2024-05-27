package mssql

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/denisenkom/go-mssqldb"
)

func Connect() {
	server := "FACUNDO\\SQLEXPRESS"
	port := 1433
	database := "test"

	connectionString := fmt.Sprintf("server=%s;port=%d;database=%s;integratedSecurity=true",
		server, port, database)

	// Abre la conexión
	db, err := sql.Open("sqlserver", connectionString)
	if err != nil {
		log.Fatal("Error creating connection pool: ", err.Error())
	}
	defer db.Close()

	// Verifica la conexión
	err = db.Ping()
	if err != nil {
		log.Fatal("Error pinging database: ", err.Error())
	}
	fmt.Println("Connected!")

	// Ejecuta una consulta
	var version string
	err = db.QueryRow("SELECT @@VERSION").Scan(&version)
	if err != nil {
		log.Fatal("Query failed: ", err.Error())
	}
	fmt.Printf("SQL Server version: %s\n", version)
}
