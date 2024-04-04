package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateProductReview creates a new product review
func CreateProductReview(c *gin.Context) {
	var review models.ProductReview
	if err := c.ShouldBindJSON(&review); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&review)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create product review"})
		return
	}

	c.JSON(http.StatusCreated, review)
}

// GetProductReviews retrieves a list of product reviews for a specific product
func GetProductReviews(c *gin.Context) {
	var reviews []models.ProductReview
	productID := c.Param("product_id")

	result := initializers.DB.Where("product_id = ?", productID).Preload("User").Find(&reviews)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch product reviews"})
		return
	}

	// Calculate aggregate values
	var totalReviews int = len(reviews)
	var ratingsMap = make(map[int]int)
	for _, review := range reviews {
		ratingsMap[review.Rating]++
	}

	c.JSON(http.StatusOK, gin.H{
		"total_reviews": totalReviews,
		"ratings":       ratingsMap,
		"reviews":       reviews,
	})
}

// UpdateProductReview updates an existing product review
func UpdateProductReview(c *gin.Context) {
	var review models.ProductReview
	id := c.Param("id")

	if err := c.ShouldBindJSON(&review); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&review).Where("id = ?", id).Updates(review)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update product review"})
		return
	}

	c.JSON(http.StatusOK, review)
}

// DeleteProductReview deletes a product review by ID
func DeleteProductReview(c *gin.Context) {
	var review models.ProductReview
	id := c.Param("id")

	result := initializers.DB.Delete(&review, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete product review"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Product review deleted successfully"})
}
