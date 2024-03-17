package initializers

import "github.com/kmishmael/sensorgrove/internal/core/models"

func SyncDatabase() {
	DB.AutoMigrate(&models.User{})
	DB.AutoMigrate(&models.Account{})
}