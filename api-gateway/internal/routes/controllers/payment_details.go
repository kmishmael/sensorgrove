package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
)

// CreatePaymentDetails creates a new payment details entry
func CreatePaymentDetails(c *gin.Context) {
	var paymentDetails models.PaymentDetails
	if err := c.ShouldBindJSON(&paymentDetails); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Create(&paymentDetails)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create payment details"})
		return
	}

	c.JSON(http.StatusCreated, paymentDetails)
}

// GetPaymentDetails retrieves a list of payment details
func GetPaymentDetails(c *gin.Context) {
	var paymentDetails []models.PaymentDetails

	result := initializers.DB.Find(&paymentDetails)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch payment details"})
		return
	}

	c.JSON(http.StatusOK, paymentDetails)
}

// GetPaymentDetailsByID retrieves a single payment details entry by ID
func GetPaymentDetailsByID(c *gin.Context) {
	var paymentDetails models.PaymentDetails
	id := c.Param("id")

	result := initializers.DB.First(&paymentDetails, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Payment details not found"})
		return
	}

	c.JSON(http.StatusOK, paymentDetails)
}

// UpdatePaymentDetails updates an existing payment details entry
func UpdatePaymentDetails(c *gin.Context) {
	var paymentDetails models.PaymentDetails
	id := c.Param("id")

	if err := c.ShouldBindJSON(&paymentDetails); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := initializers.DB.Model(&paymentDetails).Where("id = ?", id).Updates(paymentDetails)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update payment details"})
		return
	}

	c.JSON(http.StatusOK, paymentDetails)
}

// DeletePaymentDetails deletes a payment details entry by ID
func DeletePaymentDetails(c *gin.Context) {
	var paymentDetails models.PaymentDetails
	id := c.Param("id")

	result := initializers.DB.Delete(&paymentDetails, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete payment details"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Payment details deleted successfully"})
}
