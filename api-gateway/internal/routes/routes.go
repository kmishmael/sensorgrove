package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/routes/controllers"
	"github.com/kmishmael/sensorgrove/internal/routes/middlewares"
)

func RegisterRoutes(server *gin.Engine) {

	server.Use(middlewares.ConfigureCORS())

	server.GET("/auth/:provider/callback", controllers.LoginProviderCallback)
	server.GET("/auth/:provider", controllers.LoginWithProvider)

	server.POST("/signup", controllers.SignupWithCredentials)
	server.POST("/login", controllers.LoginWithCredentials)
	server.GET("/validate", middlewares.Authenticate, controllers.Validate)

}
