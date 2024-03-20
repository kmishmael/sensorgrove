package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateOrderItem creates a new order item
func CreateOrderItem(c *gin.Context) {
	var orderItem models.OrderItem
	if err := c.ShouldBindJSON(&orderItem); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&orderItem)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create order item"})
		return
	}

	c.JSON(http.StatusCreated, orderItem)
}

// GetOrderItems retrieves a list of order items
func GetOrderItems(c *gin.Context) {
	var orderItems []models.OrderItem

	result := initializers.DB.Find(&orderItems)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch order items"})
		return
	}

	c.JSON(http.StatusOK, orderItems)
}

// GetOrderItemByID retrieves a single order item by ID
func GetOrderItemByID(c *gin.Context) {
	var orderItem models.OrderItem
	id := c.Param("id")

	result := initializers.DB.First(&orderItem, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Order item not found"})
		return
	}

	c.JSON(http.StatusOK, orderItem)
}

// UpdateOrderItem updates an existing order item
func UpdateOrderItem(c *gin.Context) {
	var orderItem models.OrderItem
	id := c.Param("id")

	if err := c.ShouldBindJSON(&orderItem); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&orderItem).Where("id = ?", id).Updates(orderItem)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update order item"})
		return
	}

	c.JSON(http.StatusOK, orderItem)
}

// DeleteOrderItem deletes an order item by ID
func DeleteOrderItem(c *gin.Context) {
	var orderItem models.OrderItem
	id := c.Param("id")

	result := initializers.DB.Delete(&orderItem, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete order item"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Order item deleted successfully"})
}
