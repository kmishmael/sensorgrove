package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateProductInventory creates a new product inventory entry
func CreateProductInventory(c *gin.Context) {
	var inventory models.ProductInventory
	if err := c.ShouldBindJSON(&inventory); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&inventory)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create product inventory"})
		return
	}

	c.JSON(http.StatusCreated, inventory)
}

// GetProductInventory retrieves a list of product inventories
func GetProductInventory(c *gin.Context) {
	var inventories []models.ProductInventory

	result := initializers.DB.Find(&inventories)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch product inventories"})
		return
	}

	c.JSON(http.StatusOK, inventories)
}

// GetProductInventoryByID retrieves a single product inventory by ID
func GetProductInventoryByID(c *gin.Context) {
	var inventory models.ProductInventory
	id := c.Param("id")

	result := initializers.DB.First(&inventory, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product inventory not found"})
		return
	}

	c.JSON(http.StatusOK, inventory)
}

// UpdateProductInventory updates an existing product inventory
func UpdateProductInventory(c *gin.Context) {
	var inventory models.ProductInventory
	id := c.Param("id")

	if err := c.ShouldBindJSON(&inventory); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&inventory).Where("id = ?", id).Updates(inventory)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update product inventory"})
		return
	}

	c.JSON(http.StatusOK, inventory)
}

// DeleteProductInventory deletes a product inventory by ID
func DeleteProductInventory(c *gin.Context) {
	var inventory models.ProductInventory
	id := c.Param("id")

	result := initializers.DB.Delete(&inventory, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete product inventory"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Product inventory deleted successfully"})
}
