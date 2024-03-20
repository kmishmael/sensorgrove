package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateProductCategory creates a new product category
func CreateProductCategory(c *gin.Context) {
	var category models.ProductCategory
	if err := c.ShouldBindJSON(&category); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&category)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create product category"})
		return
	}

	c.JSON(http.StatusCreated, category)
}

// GetProductCategories retrieves a list of product categories
func GetProductCategories(c *gin.Context) {
	var categories []models.ProductCategory

	result := initializers.DB.Find(&categories)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch product categories"})
		return
	}

	c.JSON(http.StatusOK, categories)
}

// GetProductCategoryByID retrieves a single product category by ID
func GetProductCategoryByID(c *gin.Context) {
	var category models.ProductCategory
	id := c.Param("id")

	result := initializers.DB.First(&category, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product category not found"})
		return
	}

	c.JSON(http.StatusOK, category)
}

// UpdateProductCategory updates an existing product category
func UpdateProductCategory(c *gin.Context) {
	var category models.ProductCategory
	id := c.Param("id")

	if err := c.ShouldBindJSON(&category); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&category).Where("id = ?", id).Updates(category)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update product category"})
		return
	}

	c.JSON(http.StatusOK, category)
}

// DeleteProductCategory deletes a product category by ID
func DeleteProductCategory(c *gin.Context) {
	var category models.ProductCategory
	id := c.Param("id")

	result := initializers.DB.Delete(&category, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete product category"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Product category deleted successfully"})
}
