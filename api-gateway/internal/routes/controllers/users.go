package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreateCartItem creates a new cart item
func GetUser(c *gin.Context) {
	var user models.User

	email := c.Query("email")
	if email == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "email paramter is missing"})
		return
	}

	initializers.DB.Where("email = ?", email).First(&user)

	if user.ID == "" {
		c.JSON(http.StatusOK, gin.H{
			"error": "User not found",
		})
		return
	}

	UserDto := struct {
		Email    string  `json:"email"`
		Provider string  `json:"provider"`
		Error    *string `json:"error"`
	}{
		Email:    user.Email,
		Provider: user.Provider,
		Error:    nil,
	}

	c.JSON(http.StatusOK, UserDto)
}
