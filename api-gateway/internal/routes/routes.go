package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/routes/handlers"
	"github.com/kmishmael/sensorgrove/internal/routes/middlewares"
)

func RegisterRoutes(server *gin.Engine) {

	server.Use(middlewares.ConfigureCORS())

	server.GET("/auth/:provider/callback", handlers.LoginProviderCallback)
	server.GET("/auth/:provider", handlers.LoginWithProvider)

	server.POST("/signup", handlers.SignupWithCredentials)
	server.POST("/login", handlers.LoginWithCredentials)
	server.GET("/validate", middlewares.Authenticate, handlers.Validate)

}
