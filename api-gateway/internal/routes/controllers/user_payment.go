package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateUserPayment creates a new user payment
func CreateUserPayment(c *gin.Context) {
	var userPayment models.UserPayment
	if err := c.ShouldBindJSON(&userPayment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&userPayment)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user payment"})
		return
	}

	c.JSON(http.StatusCreated, userPayment)
}

// GetUserPayments retrieves a list of user payments
func GetUserPayments(c *gin.Context) {
	var userPayments []models.UserPayment

	result := initializers.DB.Find(&userPayments)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch user payments"})
		return
	}

	c.JSON(http.StatusOK, userPayments)
}

// GetUserPaymentByID retrieves a single user payment by ID
func GetUserPaymentByID(c *gin.Context) {
	var userPayment models.UserPayment
	id := c.Param("id")

	result := initializers.DB.First(&userPayment, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User payment not found"})
		return
	}

	c.JSON(http.StatusOK, userPayment)
}

// UpdateUserPayment updates an existing user payment
func UpdateUserPayment(c *gin.Context) {
	var userPayment models.UserPayment
	id := c.Param("id")

	if err := c.ShouldBindJSON(&userPayment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&userPayment).Where("id = ?", id).Updates(userPayment)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update user payment"})
		return
	}

	c.JSON(http.StatusOK, userPayment)
}

// DeleteUserPayment deletes a user payment by ID
func DeleteUserPayment(c *gin.Context) {
	var userPayment models.UserPayment
	id := c.Param("id")

	result := initializers.DB.Delete(&userPayment, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete user payment"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User payment deleted successfully"})
}
