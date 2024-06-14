package main

import (
	"fmt"
	"log"
	"os"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/sessions"
	"github.com/kmishmael/sensorgrove/internal/initializers"
	"github.com/kmishmael/sensorgrove/internal/routes"
	"github.com/markbates/goth/gothic"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
	//initializers.SyncDatabase()
}

func main() {
	r := gin.Default()

	key := os.Getenv("SESSION_SECRET") // Replace with your SESSION_SECRET or similar
	maxAge := 86400 * 30 * 3           // 90 days
	prodChecker := os.Getenv("ISPROD")
	isProd := false
	isProd, err := strconv.ParseBool(prodChecker)
	if err != nil {
		fmt.Errorf("Error: ISPROD Environment variable is not set")
	}

	// Set to true when serving over https
	store := sessions.NewCookieStore([]byte(key))
	store.MaxAge(maxAge)

	store.Options.Path = "/"
	store.Options.HttpOnly = true
	store.Options.Secure = isProd

	gothic.Store = store

	// TODO: Rethink about adding this functionality on the server side later
	// goth.UseProviders(
	// 	google.New(os.Getenv("CLIENT_ID"), os.Getenv("CLIENT_SECRET"), "http://localhost:3000/auth/google/callback", "email", "profile"),
	// )

	routes.RegisterRoutes(r)

	r.Run(":8000")
	log.Println("listening on localhost:3000")

}
