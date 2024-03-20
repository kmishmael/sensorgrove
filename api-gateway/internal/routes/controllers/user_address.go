package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateUserAddress creates a new user address
func CreateUserAddress(c *gin.Context) {
	var userAddress models.UserAddress
	if err := c.ShouldBindJSON(&userAddress); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&userAddress)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user address"})
		return
	}

	c.JSON(http.StatusCreated, userAddress)
}

// GetUserAddresses retrieves a list of user addresses
func GetUserAddresses(c *gin.Context) {
	var userAddresses []models.UserAddress

	result := initializers.DB.Find(&userAddresses)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch user addresses"})
		return
	}

	c.JSON(http.StatusOK, userAddresses)
}

// GetUserAddressByID retrieves a single user address by ID
func GetUserAddressByID(c *gin.Context) {
	var userAddress models.UserAddress
	id := c.Param("id")

	result := initializers.DB.First(&userAddress, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User address not found"})
		return
	}

	c.JSON(http.StatusOK, userAddress)
}

// UpdateUserAddress updates an existing user address
func UpdateUserAddress(c *gin.Context) {
	var userAddress models.UserAddress
	id := c.Param("id")

	if err := c.ShouldBindJSON(&userAddress); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&userAddress).Where("id = ?", id).Updates(userAddress)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update user address"})
		return
	}

	c.JSON(http.StatusOK, userAddress)
}

// DeleteUserAddress deletes a user address by ID
func DeleteUserAddress(c *gin.Context) {
	var userAddress models.UserAddress
	id := c.Param("id")

	result := initializers.DB.Delete(&userAddress, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete user address"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User address deleted successfully"})
}
