package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/kmishmael/sensorgrove/internal/routes/controllers"
	"github.com/kmishmael/sensorgrove/internal/routes/middlewares"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger" // gin-swagger middleware
	_ "github.com/kmishmael/sensorgrove/docs"
)

func RegisterRoutes(server *gin.Engine) {

	server.Use(middlewares.ConfigureCORS())

	server.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))

	server.GET("/auth/:provider/callback", controllers.LoginProviderCallback)
	server.GET("/auth/:provider", controllers.LoginWithProvider)
	server.POST("/account", controllers.CreateAccount)

	server.POST("/signup", controllers.SignupWithCredentials)
	server.POST("/login", controllers.LoginWithCredentials)
	server.GET("/validate", middlewares.Authenticate, controllers.Validate)

	// PRODUCTS
	server.POST("/products", middlewares.Authenticate, controllers.CreateProduct)
	server.GET("/products", controllers.GetProducts)
	server.GET("/products/:id", middlewares.Authenticate, controllers.GetProductByID)
	server.PUT("/products/:id", middlewares.Authenticate, controllers.UpdateProduct)
	server.DELETE("products/:id", middlewares.Authenticate, controllers.DeleteProduct)

	// CART - SHOPPING SESSION
	server.POST("/carts", middlewares.Authenticate, controllers.CreateShoppingSession)
	server.GET("/carts/:id", middlewares.Authenticate, controllers.GetShoppingSessionByID)
	server.PUT("/carts/:id", middlewares.Authenticate, controllers.UpdateShoppingSession)
	server.DELETE("carts/:id", middlewares.Authenticate, controllers.DeleteShoppingSession)

	// CART ITEM
	server.POST("/carts/:id/items", middlewares.Authenticate, controllers.CreateCartItem)
	server.GET("/carts/:id/items", controllers.GetCartItems)
	server.GET("/carts/:id/items/:cartId", middlewares.Authenticate, controllers.GetCartItemByID)
	server.PUT("/carts/:id/items/:cartId", middlewares.Authenticate, controllers.UpdateCartItem)
	server.DELETE("carts/:id/items/:cartId", middlewares.Authenticate, controllers.DeleteCartItem)

	// DISCOUNT
	server.POST("/discounts", middlewares.Authenticate, controllers.CreateDiscount)
	server.GET("/discounts", middlewares.Authenticate, controllers.GetDiscounts)
	server.GET("/discounts/:id", middlewares.Authenticate, controllers.GetDiscountByID)
	server.PUT("/discounts/:id", middlewares.Authenticate, controllers.UpdateDiscount)
	server.DELETE("discounts/:id", middlewares.Authenticate, controllers.DeleteDiscount)

	// ORDERS
	server.POST("/orders", middlewares.Authenticate, controllers.CreateOrderDetails)
	server.GET("/orders", middlewares.Authenticate, controllers.GetOrderDetails)
	server.GET("/orders/:id", middlewares.Authenticate, controllers.GetOrderDetailsByID)
	server.PUT("/orders/:id", middlewares.Authenticate, controllers.UpdateOrderDetails)
	server.DELETE("orders/:id", middlewares.Authenticate, controllers.DeleteOrderDetails)

	// ORDER ITEMS
	server.POST("/orders/:id/items", middlewares.Authenticate, controllers.CreateOrderItem)
	server.GET("/orders/:id/items", middlewares.Authenticate, controllers.GetOrderItemByID)
	server.GET("/orders/:id/items/:itemId", middlewares.Authenticate, controllers.GetOrderItemByID)
	server.PUT("/orders/:id/items/:itemId", middlewares.Authenticate, controllers.UpdateOrderItem)
	server.DELETE("orders/:id/items/:itemId", middlewares.Authenticate, controllers.DeleteOrderItem)

	// PAYMENT DETAILS
	server.POST("/user-payments-details", middlewares.Authenticate, controllers.CreatePaymentDetails)
	server.GET("/user-payments-details", middlewares.Authenticate, controllers.GetPaymentDetails)
	server.GET("/user-payments-details/:id", middlewares.Authenticate, controllers.GetPaymentDetailsByID)
	server.PUT("/user-payments-details/:id", middlewares.Authenticate, controllers.UpdatePaymentDetails)
	server.DELETE("user-payments-details/:id", middlewares.Authenticate, controllers.DeletePaymentDetails)

	// PRODUCT CATEGORY
	server.POST("/product-categories", middlewares.Authenticate, controllers.CreateProductCategory)
	server.GET("/product-categories", middlewares.Authenticate, controllers.GetProductCategories)
	server.GET("/product-categories/:id", middlewares.Authenticate, controllers.GetProductCategoryByID)
	server.PUT("/product-categories/:id", middlewares.Authenticate, controllers.UpdateProductCategory)
	server.DELETE("product-categories/:id", middlewares.Authenticate, controllers.DeleteProductCategory)

	// PRODUCT IMAGE
	server.POST("/product-images", middlewares.Authenticate, controllers.CreateProductImage)
	server.GET("/product-images", middlewares.Authenticate, controllers.GetProductImages)
	server.GET("/product-images/:id", middlewares.Authenticate, controllers.GetProductImageByID)
	server.PUT("/product-images/:id", middlewares.Authenticate, controllers.UpdateProductImage)
	server.DELETE("product-images/:id", middlewares.Authenticate, controllers.DeleteProductImage)

	// PRODUCT INVENTORY
	server.POST("/product-inventory", middlewares.Authenticate, controllers.CreateProductInventory)
	server.GET("/product-inventory", middlewares.Authenticate, controllers.GetProductInventory)
	server.GET("/product-inventory/:id", middlewares.Authenticate, controllers.GetProductInventoryByID)
	server.PUT("/product-inventory/:id", middlewares.Authenticate, controllers.UpdateProductInventory)
	server.DELETE("product-inventory/:id", middlewares.Authenticate, controllers.DeleteProductInventory)

	// USER ADDRESS
	server.POST("/user-addresses", middlewares.Authenticate, controllers.CreateUserAddress)
	server.GET("/user-addresses", middlewares.Authenticate, controllers.GetUserAddresses)
	server.GET("/user-addresses/:id", middlewares.Authenticate, controllers.GetUserAddressByID)
	server.PUT("/user-addresses/:id", middlewares.Authenticate, controllers.UpdateUserAddress)
	server.DELETE("user-addresses/:id", middlewares.Authenticate, controllers.DeleteUserAddress)

	// USER PAYMENT
	server.POST("/user-payments", middlewares.Authenticate, controllers.CreateUserPayment)
	server.GET("/user-payments", middlewares.Authenticate, controllers.GetUserPayments)
	server.GET("/user-payments/:id", middlewares.Authenticate, controllers.GetUserPaymentByID)
	server.PUT("/user-payments/:id", middlewares.Authenticate, controllers.UpdateUserPayment)
	server.DELETE("user-payments/:id", middlewares.Authenticate, controllers.DeleteUserPayment)

}
