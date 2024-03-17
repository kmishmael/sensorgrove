package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/initializers"
	"github.com/kmishmael/sensorgrove/internal/routes"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
	//initializers.SyncDatabase()
}

func main() {
	r := gin.Default()
	routes.RegisterRoutes(r)

	r.Run(":3000")
	log.Println("listening on localhost:3000")

}
