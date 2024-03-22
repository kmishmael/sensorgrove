package middlewares

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/pkg/tokens"
)

func Authenticate(context *gin.Context) {
	token := context.Request.Header.Get("Authorization")


	if token == "" {
		context.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Authorization header is missing"})
		return
	}

	parts := strings.Split(token, " ")
    if len(parts) != 2 || parts[0] != "Bearer" {
		context.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid authorization header"})
        return
    }
	tokenSection := parts[1]

	claims, err := tokens.VerifyToken(tokenSection)

	if err != nil {
		context.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Not Authorized."})
		return
	}

	context.Set("user", claims)
	context.Next()
}
