package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateProductImage creates a new product image
func CreateProductImage(c *gin.Context) {
	var productImage models.ProductImage
	if err := c.ShouldBindJSON(&productImage); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&productImage)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create product image"})
		return
	}

	c.JSON(http.StatusCreated, productImage)
}

// GetProductImages retrieves a list of product images
func GetProductImages(c *gin.Context) {
	var productImages []models.ProductImage

	result := initializers.DB.Find(&productImages)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch product images"})
		return
	}

	c.JSON(http.StatusOK, productImages)
}

// GetProductImageByID retrieves a single product image by ID
func GetProductImageByID(c *gin.Context) {
	var productImage models.ProductImage
	id := c.Param("id")

	result := initializers.DB.First(&productImage, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product image not found"})
		return
	}

	c.JSON(http.StatusOK, productImage)
}

// UpdateProductImage updates an existing product image
func UpdateProductImage(c *gin.Context) {
	var productImage models.ProductImage
	id := c.Param("id")

	if err := c.ShouldBindJSON(&productImage); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&productImage).Where("id = ?", id).Updates(productImage)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update product image"})
		return
	}

	c.JSON(http.StatusOK, productImage)
}

// DeleteProductImage deletes a product image by ID
func DeleteProductImage(c *gin.Context) {
	var productImage models.ProductImage
	id := c.Param("id")

	result := initializers.DB.Delete(&productImage, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete product image"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Product image deleted successfully"})
}
