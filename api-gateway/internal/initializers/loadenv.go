package initializers

import (
	"log"

	"github.com/joho/godotenv"
	"os"
)

func LoadEnvVariables() {
	err := godotenv.Load()

	if err != nil {
		log.Print("Error loading .env file, proceding assuming it is maintained by an external service")
		log.Printf("DATABASE URL -> %s", os.Getenv("DATABASE_URL"))
	}
}
