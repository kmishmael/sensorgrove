package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateProduct creates a new product
func CreateProduct(c *gin.Context) {
	var product models.Product
	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&product)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create product"})
		return
	}

	c.JSON(http.StatusCreated, product)
}

// GetProducts retrieves a list of products with pagination
func GetProducts(c *gin.Context) {
	var products []models.Product

	page := c.DefaultQuery("page", "1")
	limit := c.DefaultQuery("limit", "10")

	offset := (page - 1) * limit

	result := initializers.DB.Offset(offset).Limit(limit).Find(&products)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch products"})
		return
	}

	c.JSON(http.StatusOK, products)
}

// GetProductByID retrieves a single product by ID
func GetProductByID(c *gin.Context) {
	var product models.Product
	id := c.Param("id")

	result := initializers.DB.First(&product, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	c.JSON(http.StatusOK, product)
}

// UpdateProduct updates an existing product
func UpdateProduct(c *gin.Context) {
	var product models.Product
	id := c.Param("id")

	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&product).Where("id = ?", id).Updates(product)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update product"})
		return
	}

	c.JSON(http.StatusOK, product)
}

// DeleteProduct deletes a product by ID
func DeleteProduct(c *gin.Context) {
	var product models.Product
	id := c.Param("id")

	result := initializers.DB.Delete(&product, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete product"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Product deleted successfully"})
}
