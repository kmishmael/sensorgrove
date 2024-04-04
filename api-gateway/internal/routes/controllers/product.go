package controllers

import (
	"fmt"
	"math"
	"net/http"

	"strconv"

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
	categorySlug := c.DefaultQuery("category", "")
	priceLessThan := c.DefaultQuery("lt", "")
	priceGreaterThan := c.DefaultQuery("gt", "")

	pageNumber, err := strconv.Atoi(page)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": page + " cannot be parsed as an integer."})
		return
	}

	limitNumber, err := strconv.Atoi(limit)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": limit + " cannot be parsed as an integer."})
		return
	}
	offset := (pageNumber - 1) * limitNumber

	query := initializers.DB.Model(&models.Product{})

	if categorySlug != "" {
		var category models.ProductCategory
		if err := initializers.DB.Where("slug = ?", categorySlug).First(&category).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Category not found"})
			return
		}
		query = query.Where("category_id = ?", category.ID)
	}

	if priceLessThan != "" {
		price, err := strconv.ParseFloat(priceLessThan, 64)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid priceLessThan value"})
			return
		}
		query = query.Where("price < ?", price)
	}

	if priceGreaterThan != "" {
		price, err := strconv.ParseFloat(priceGreaterThan, 64)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid priceGreaterThan value"})
			return
		}
		query = query.Where("price > ?", price)
	}
	result := query.
		Offset(offset).
		Limit(limitNumber).
		Preload("Category").
		Preload("Inventory").
		Preload("Discount").
		Preload("Images").
		Find(&products)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch products"})
		return
	}

	var totalCount int64
	query.Count(&totalCount)

	totalPages := int(math.Ceil(float64(totalCount) / float64(limitNumber)))

	c.JSON(http.StatusOK, gin.H{
		"products":     products,
		"page":         pageNumber,
		"totalPages":   totalPages,
		"totalCount":   totalCount,
		"perPage":      limitNumber,
		"currentCount": len(products),
	})
}

func GetProducts2(c *gin.Context) {
	var products []models.Product

	page := c.DefaultQuery("page", "1")
	limit := c.DefaultQuery("limit", "10")

	pageNumber, err := strconv.Atoi(page)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": page + " cannot be parsed as a integer."})
	}

	limitNumber, err := strconv.Atoi(limit)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": limit + " cannot be parsed as an integer."})
	}
	offset := (pageNumber - 1) * limitNumber

	result := initializers.DB.Offset(offset).Limit(limitNumber).Find(&products)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch products"})
		return
	}

	c.JSON(http.StatusOK, products)
}

// GetProductByID retrieves a single product by ID
func GetProductBySlug(c *gin.Context) {
	var product models.Product
	slug := c.Param("slug")
	//fmt.Printf("slug ===> %s\n", slug)

	query := initializers.DB.Model(&models.Product{})

	result := query.
		Where("slug = ?", slug).
		Preload("Category").
		Preload("Inventory").
		Preload("Discount").
		Preload("Images").
		Find(&product)

	fmt.Println(result)

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
