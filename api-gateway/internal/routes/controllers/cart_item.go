package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateCartItem creates a new cart item
func CreateCartItem(c *gin.Context) {
	var cartItem models.CartItem
	if err := c.ShouldBindJSON(&cartItem); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&cartItem)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create cart item"})
		return
	}

	c.JSON(http.StatusCreated, cartItem)
}

// GetCartItems retrieves a list of cart items
// suspended fuction - no particular use at the moment
func GetCartItems(c *gin.Context) {
	var cartItems []models.CartItem

	result := initializers.DB.Find(&cartItems)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch cart items"})
		return
	}

	c.JSON(http.StatusOK, cartItems)
}

// GetCartItemByID retrieves a single cart item by ID
func GetCartItemByID(c *gin.Context) {
	var cartItem models.CartItem
	id := c.Param("cartId")

	result := initializers.DB.First(&cartItem, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Cart item not found"})
		return
	}

	c.JSON(http.StatusOK, cartItem)
}

// UpdateCartItem updates an existing cart item
func UpdateCartItem(c *gin.Context) {
	var cartItem models.CartItem
	id := c.Param("cartId")

	if err := c.ShouldBindJSON(&cartItem); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&cartItem).Where("id = ?", id).Updates(cartItem)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update cart item"})
		return
	}

	c.JSON(http.StatusOK, cartItem)
}

// DeleteCartItem deletes a cart item by ID
func DeleteCartItem(c *gin.Context) {
	var cartItem models.CartItem
	id := c.Param("cartId")

	result := initializers.DB.Delete(&cartItem, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete cart item"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Cart item deleted successfully"})
}
