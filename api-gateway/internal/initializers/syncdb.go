package initializers

import (
	"fmt"

	"github.com/kmishmael/sensorgrove/internal/core/models"
)

func SyncDatabase() {
	fmt.Println("automigrating database")
	DB.AutoMigrate(&models.User{})
	DB.AutoMigrate(&models.Account{})
	DB.AutoMigrate(&models.UserAddress{})
	DB.AutoMigrate(&models.UserPayment{})
	DB.AutoMigrate(&models.ProductCategory{})
	DB.AutoMigrate(&models.Product{})
	DB.AutoMigrate(&models.ProductInventory{})
	DB.AutoMigrate(&models.Discount{})
	DB.AutoMigrate(&models.ProductImage{})
	DB.AutoMigrate(&models.ShoppingSession{})
	DB.AutoMigrate(&models.CartItem{})
	DB.AutoMigrate(&models.PaymentDetails{})
	DB.AutoMigrate(&models.OrderDetails{})
	DB.AutoMigrate(&models.OrderItem{})

}