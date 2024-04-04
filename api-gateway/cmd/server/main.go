package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/sessions"
	"github.com/kmishmael/sensorgrove/internal/initializers"
	"github.com/kmishmael/sensorgrove/internal/routes"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/google"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
	//initializers.SyncDatabase()
}

func main() {
	r := gin.Default()

	key := os.Getenv("SESSION_SECRET") // Replace with your SESSION_SECRET or similar
	maxAge := 86400 * 30               // 30 days
	isProd := false                    // Set to true when serving over https

	store := sessions.NewCookieStore([]byte(key))
	store.MaxAge(maxAge)

	store.Options.Path = "/"
	store.Options.HttpOnly = true
	store.Options.Secure = isProd

	gothic.Store = store

	goth.UseProviders(
		google.New(os.Getenv("CLIENT_ID"), os.Getenv("CLIENT_SECRET"), "http://localhost:3000/auth/google/callback", "email", "profile"),
	)

	routes.RegisterRoutes(r)

	r.Run(":8000")
	log.Println("listening on localhost:3000")

}
