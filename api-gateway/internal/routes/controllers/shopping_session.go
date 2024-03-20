package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateShoppingSession creates a new shopping session
func CreateShoppingSession(c *gin.Context) {
	var shoppingSession models.ShoppingSession
	if err := c.ShouldBindJSON(&shoppingSession); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&shoppingSession)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create shopping session"})
		return
	}

	c.JSON(http.StatusCreated, shoppingSession)
}

// GetShoppingSessions retrieves a list of shopping sessions
func GetShoppingSessions(c *gin.Context) {
	var shoppingSessions []models.ShoppingSession

	result := initializers.DB.Find(&shoppingSessions)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch shopping sessions"})
		return
	}

	c.JSON(http.StatusOK, shoppingSessions)
}

// GetShoppingSessionByID retrieves a single shopping session by ID
func GetShoppingSessionByID(c *gin.Context) {
	var shoppingSession models.ShoppingSession
	id := c.Param("id")

	result := initializers.DB.First(&shoppingSession, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Shopping session not found"})
		return
	}

	c.JSON(http.StatusOK, shoppingSession)
}

// UpdateShoppingSession updates an existing shopping session
func UpdateShoppingSession(c *gin.Context) {
	var shoppingSession models.ShoppingSession
	id := c.Param("id")

	if err := c.ShouldBindJSON(&shoppingSession); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&shoppingSession).Where("id = ?", id).Updates(shoppingSession)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update shopping session"})
		return
	}

	c.JSON(http.StatusOK, shoppingSession)
}

// DeleteShoppingSession deletes a shopping session by ID
func DeleteShoppingSession(c *gin.Context) {
	var shoppingSession models.ShoppingSession
	id := c.Param("id")

	result := initializers.DB.Delete(&shoppingSession, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete shopping session"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Shopping session deleted successfully"})
}
