package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateDiscount creates a new discount
func CreateDiscount(c *gin.Context) {
	var discount models.Discount
	if err := c.ShouldBindJSON(&discount); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&discount)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create discount"})
		return
	}

	c.JSON(http.StatusCreated, discount)
}

// GetDiscounts retrieves a list of discounts
func GetDiscounts(c *gin.Context) {
	var discounts []models.Discount

	result := initializers.DB.Find(&discounts)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch discounts"})
		return
	}

	c.JSON(http.StatusOK, discounts)
}

// GetDiscountByID retrieves a single discount by ID
func GetDiscountByID(c *gin.Context) {
	var discount models.Discount
	id := c.Param("id")

	result := initializers.DB.First(&discount, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Discount not found"})
		return
	}

	c.JSON(http.StatusOK, discount)
}

// UpdateDiscount updates an existing discount
func UpdateDiscount(c *gin.Context) {
	var discount models.Discount
	id := c.Param("id")

	if err := c.ShouldBindJSON(&discount); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&discount).Where("id = ?", id).Updates(discount)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update discount"})
		return
	}

	c.JSON(http.StatusOK, discount)
}

// DeleteDiscount deletes a discount by ID
func DeleteDiscount(c *gin.Context) {
	var discount models.Discount
	id := c.Param("id")

	result := initializers.DB.Delete(&discount, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete discount"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Discount deleted successfully"})
}
