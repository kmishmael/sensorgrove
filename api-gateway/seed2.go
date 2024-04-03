package main

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/kmishmael/sensorgrove/internal/core/models" // Import your models package
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func main() {
	// Database connection string(s)
	err := godotenv.Load()

	if err != nil {
		log.Print("Error loading .env file, proceding assuming it is maintained by an external service")
	}
	dsn := os.Getenv("DATABASE_URL")

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info), // Set logger mode
	})
	if err != nil {
		log.Fatalf("Error connecting to database: %v", err)
	}

	// Migrate the schema (optional)
	db.AutoMigrate(&models.User{}, &models.Account{}, &models.Product{}, &models.ProductReview{}, &models.ProductImage{}, &models.ProductCategory{}, &models.ProductInventory{}, &models.Discount{}, &models.OrderDetails{}, &models.OrderItem{}, &models.PaymentDetails{}, &models.ShoppingSession{}, &models.CartItem{}, &models.UserAddress{}, &models.UserPayment{})

	seedReviews(db)
}

func seedReviews(db *gorm.DB) {
	reviews := []models.ProductReview{
		{ProductID: "1197ca4d-9e39-49dd-89b4-e6ee1e8cd3a9", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 4, Title: "Great", Comment: func(str string) *string { return &str }("Great product!")},
		{ProductID: "1197ca4d-9e39-49dd-89b4-e6ee1e8cd3a9", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 5, Title: "Great", Comment: func(str string) *string { return &str }("Excellent quality.")},
		{ProductID: "25df907d-1c81-4b17-89bc-336e36068bbe", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 3, Title: "Great", Comment: func(str string) *string { return &str }("Average product.")},
		{ProductID: "25df907d-1c81-4b17-89bc-336e36068bbe", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 4, Title: "Great", Comment: func(str string) *string { return &str }("Windows Modern Standby has not been fixed.")},
		{ProductID: "2b72ee80-b28a-4b5b-9d0c-d583e31b6ad7", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 4, Title: "Great", Comment: func(str string) *string { return &str }("Power modes is a mess, good laptop overall.")},
		{ProductID: "2b72ee80-b28a-4b5b-9d0c-d583e31b6ad7", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 4, Title: "As expected", Comment: func(str string) *string { return &str }("Great product!")},
		{ProductID: "b7601c15-15b0-43b4-bf76-119e7ed66632", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 5, Title: "As expected", Comment: func(str string) *string { return &str }("Excellent quality.")},
		{ProductID: "b7601c15-15b0-43b4-bf76-119e7ed66632", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 3, Title: "As expected", Comment: func(str string) *string { return &str }("Average product.")},
		{ProductID: "1b51824f-23f0-4ae1-a3c7-aa0fc8efee95", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 4, Title: "As expected", Comment: func(str string) *string { return &str }("Windows Modern Standby has not been fixed.")},
		{ProductID: "1b51824f-23f0-4ae1-a3c7-aa0fc8efee95", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 4, Title: "As expected", Comment: func(str string) *string { return &str }("Power modes is a mess, good laptop overall.")},
		{ProductID: "d9391695-04b9-408e-aca5-0a02fd2bb7eb", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 4, Title: "Amazing", Comment: func(str string) *string { return &str }("Great product!")},
		{ProductID: "d9391695-04b9-408e-aca5-0a02fd2bb7eb", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 5, Title: "Amazing", Comment: func(str string) *string { return &str }("Excellent quality.")},
		{ProductID: "23d5ebc6-fb86-4c64-9f21-47f83f105c66", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 3, Title: "Amazing", Comment: func(str string) *string { return &str }("Average product.")},
		{ProductID: "23d5ebc6-fb86-4c64-9f21-47f83f105c66", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 4, Title: "Amazing", Comment: func(str string) *string { return &str }("Windows Modern Standby has not been fixed.")},
		{ProductID: "e5af37a8-8b33-49a8-9128-3eeaa738f8ce", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 4, Title: "Amazing", Comment: func(str string) *string { return &str }("Power modes is a mess, good laptop overall.")},
		{ProductID: "e5af37a8-8b33-49a8-9128-3eeaa738f8ce", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 4, Title: "Can't complain", Comment: func(str string) *string { return &str }("Great product!")},
		{ProductID: "30c578a5-8a34-4438-90cc-a72ec318ba1a", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 5, Title: "Can't complain", Comment: func(str string) *string { return &str }("Excellent quality.")},
		{ProductID: "30c578a5-8a34-4438-90cc-a72ec318ba1a", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 3, Title: "Can't complain", Comment: func(str string) *string { return &str }("Average product.")},
		{ProductID: "35d8fcea-d269-4fdc-9f23-fe04ac39034f", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 4, Title: "Can't complain", Comment: func(str string) *string { return &str }("Windows Modern Standby has not been fixed.")},
		{ProductID: "35d8fcea-d269-4fdc-9f23-fe04ac39034f", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 4, Title: "Can't complain", Comment: func(str string) *string { return &str }("Power modes is a mess, good laptop overall.")},

		// Add more reviews as needed
	}

	for _, review := range reviews {
		if err := db.Create(&review).Error; err != nil {
			log.Fatalf("Failed to seed reviews: %v", err)
		}
	}

	fmt.Println("Reviews seeded successfully.")
}
