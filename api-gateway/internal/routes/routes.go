package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/routes/middlewares"
)

func RegisterRoutes(server *gin.Engine) {

	server.Use(middlewares.ConfigureCORS())

}
