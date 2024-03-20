package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateOrderDetails creates a new order details entry
func CreateOrderDetails(c *gin.Context) {
	var orderDetails models.OrderDetails
	if err := c.ShouldBindJSON(&orderDetails); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&orderDetails)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create order details"})
		return
	}

	c.JSON(http.StatusCreated, orderDetails)
}

// GetOrderDetails retrieves a list of order details
func GetOrderDetails(c *gin.Context) {
	var orderDetails []models.OrderDetails

	result := initializers.DB.Find(&orderDetails)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch order details"})
		return
	}

	c.JSON(http.StatusOK, orderDetails)
}

// GetOrderDetailsByID retrieves a single order details entry by ID
func GetOrderDetailsByID(c *gin.Context) {
	var orderDetails models.OrderDetails
	id := c.Param("id")

	result := initializers.DB.First(&orderDetails, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Order details not found"})
		return
	}

	c.JSON(http.StatusOK, orderDetails)
}

// UpdateOrderDetails updates an existing order details entry
func UpdateOrderDetails(c *gin.Context) {
	var orderDetails models.OrderDetails
	id := c.Param("id")

	if err := c.ShouldBindJSON(&orderDetails); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&orderDetails).Where("id = ?", id).Updates(orderDetails)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update order details"})
		return
	}

	c.JSON(http.StatusOK, orderDetails)
}

// DeleteOrderDetails deletes an order details entry by ID
func DeleteOrderDetails(c *gin.Context) {
	var orderDetails models.OrderDetails
	id := c.Param("id")

	result := initializers.DB.Delete(&orderDetails, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete order details"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Order details deleted successfully"})
}
