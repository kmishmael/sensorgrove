package handlers

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/kmishmael/sensorgrove/internal/core/models"
	"github.com/kmishmael/sensorgrove/internal/initializers"
	"github.com/markbates/goth/gothic"
	"golang.org/x/crypto/bcrypt"
)

func LoginProviderCallback(c *gin.Context) {

	res := c.Writer
	req := c.Request
	key := os.Getenv("SESSION_SECRET")

	user, err := gothic.CompleteUserAuth(res, req)
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error())
		return
	}

	fmt.Println(user)

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub":   user.UserID,
		"email": user.Email,
		"name":  user.Name,
	})

	tokenString, err := token.SignedString([]byte(key))

	if err != nil {
		c.String(http.StatusInternalServerError, err.Error())
		return
	}
	// Set the token in a cookie
	cookie := http.Cookie{
		Name:     "token",
		Value:    tokenString,
		HttpOnly: true,                           // This prevents JavaScript from accessing the cookie
		Expires:  time.Now().Add(time.Hour * 24), // Set cookie expiry if required
		Path:     "/",                            // Set the cookie path as needed
	}
	
	http.SetCookie(res, &cookie)

	fmt.Printf("token1 -> %s\n", tokenString)

}

func LoginWithProvider(c *gin.Context) {
	key := os.Getenv("SESSION_SECRET") // Replace with your SESSION_SECRET or similar

	provider, isFound := c.Params.Get("provider")
	if !isFound {
		c.String(http.StatusInternalServerError, "Provider parameter not found.")
		return
	}
	//req := c.Request.WithContext(context.WithValue(context.Background(), "provider", Provider(provider)))

	//req := c.Request.WithContext(context.WithValue(context.Background(), interface{}(Provider("provider")), Provider(provider)))
	originalQuery := c.Request.URL.Query()
	originalQuery.Add("provider", provider)

	c.Request.URL.RawQuery = originalQuery.Encode()

	fmt.Println(c.Request.URL.Query())
	//fmt.Printf("lets check it  -> %s\n", c.Request.URL.Query())

	if user, err := gothic.CompleteUserAuth(c.Writer, c.Request); err == nil {
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"sub":   user.UserID,
			"email": user.Email,
			"name":  user.Name,
		})

		tokenString, err := token.SignedString([]byte(key))

		if err != nil {
			c.String(http.StatusInternalServerError, err.Error())
			return
		}
		fmt.Printf("token2 -> %s\n", tokenString)

	} else {
		fmt.Println("niko jap")
		gothic.BeginAuthHandler(c.Writer, c.Request)
	}
}

func SignupWithCredentials(c *gin.Context) {
	// Get the email/pass off req Body
	var body struct {
		Email    string
		Password string
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read body",
		})

		return
	}

	// Hash the password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to hash password.",
		})
		return
	}

	// Create the user
	user := models.User{Email: body.Email, Password: string(hash)}

	result := initializers.DB.Create(&user)

	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to create user.",
		})
	}

	// Respond
	c.JSON(http.StatusOK, gin.H{})
}

func LoginWithCredentials(c *gin.Context) {
	// Get email & pass off req body
	var body struct {
		Email    string
		Password string
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read body",
		})

		return
	}

	// Look up for requested user
	var user models.User

	initializers.DB.First(&user, "email = ?", body.Email)

	if user.ID == "" {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid email or password",
		})
		return
	}

	// Compare sent in password with saved users password
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid email or password",
		})
		return
	}

	// Generate a JWT token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	// Sign and get the complete encoded token as a string using the secret
	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to create token",
		})
		return
	}

	// Respond
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", tokenString, 3600*24*30, "", "", false, true)

	c.JSON(http.StatusOK, gin.H{})
}

func Validate(c *gin.Context) {
	user, _ := c.Get("user")

	// user.(models.User).Email    -->   to access specific data

	c.JSON(http.StatusOK, gin.H{
		"message": user,
	})
}
