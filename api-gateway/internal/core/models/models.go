package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID              string  `json:"id" gorm:"default:gen_random_uuid();"`
	Email           string  `json:"email" gorm:"index"`
	Password        *string `json:"password"`
	Name            *string `json:"name"`
	Telephone       *string `json:"telephone"`
	Provider        string  `json:"provider" gorm:"varchar(255);default:credentials"`
	Role            string  `json:"role" gorm:"varchar(255);default:USER"`
	EmailVerified   bool    `json:"email_verified" gorm:"default:false"`
	ImageUrl        *string `json:"image"`
	AvatarUrl       *string `json:"avatar_url"`
	CreatedAt       time.Time
	UpdatedAt       time.Time
	DeletedAt       gorm.DeletedAt  `gorm:"index"`
	Address         UserAddress     `json:"address" gorm:"foreignKey:UserID"`
	Payments        []UserPayment   `json:"payments" gorm:"foreignKey:UserID"`
	Orders          []OrderDetails  `json:"orders" gorm:"foreignKey:UserID"`
	ShoppingSession ShoppingSession `json:"shopping_session" gorm:"foreignKey:UserID"`
}

type Account struct {
	ID                string  `json:"id" gorm:"default:gen_random_uuid();"`
	Type              string  `json:"type" gorm:"varchar(255)"`
	Provider          string  `json:"provider" gorm:"varchar(255)"`
	ProviderAccountId string  `json:"providerAccountId" gorm:"varchar(255)"`
	RefreshToken      *string `json:"refresh_token"`
	AccessToken       *string `json:"access_token"`
	ExpiresAt         *string `json:"expires_at"`
	TokenType         *string `json:"token_type"`
	Scope             *string `json:"scope"`
	IdToken           *string `json:"id_token"`
	CreatedAt         time.Time
	UpdatedAt         time.Time
	DeletedAt         gorm.DeletedAt `gorm:"index"`
}

type Product struct {
	ID          string  `json:"id" gorm:"default:gen_random_uuid();"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Slug        string  `json:"slug" gorm:"index"`
	SKU         string  `json:"sku"`
	CategoryID  string  `json:"category_id"`
	InventoryID *string `json:"inventory_id"`
	Price       float64 `json:"price"`
	DiscountID  *string `json:"discount_id"`

	Category  ProductCategory  `json:"category" gorm:"foreignKey:CategoryID"`
	Inventory ProductInventory `json:"inventory" gorm:"foreignKey:InventoryID"`
	Discount  Discount         `json:"discount" gorm:"foreignKey:DiscountID"`
	Images    []ProductImage   `json:"images" gorm:"foreignKey:ProductID"`
}

type ProductReview struct {
	ID        string  `json:"id" gorm:"default:gen_random_uuid();"`
	ProductID string  `json:"product_id"`
	UserID    string  `json:"user_id"`
	Rating    int     `json:"rating"`
	Title     string  `json:"title"`
	Comment   *string `json:"comment"`
	User      User    `json:"user" gorm:"foreignKey:UserID"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}

type ProductImage struct {
	ID        string `json:"id" gorm:"default:gen_random_uuid();"`
	ProductID string `json:"product_id"`
	URL       string `json:"url"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}

type ProductCategory struct {
	ID          string `json:"id" gorm:"default:gen_random_uuid();"`
	Name        string `json:"name"`
	Slug        string `json:"slug"`
	Description string `json:"description"`
	CreatedAt   time.Time
	ImageUrl    *string `json:"imageUrl"`
	UpdatedAt   time.Time
	DeletedAt   gorm.DeletedAt `gorm:"index"`
	Products    []Product      `json:"products" gorm:"foreignKey:CategoryID"`
}

type ProductInventory struct {
	ID        string `json:"id" gorm:"default:gen_random_uuid();"`
	Quantity  int    `json:"quantity"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}

type Discount struct {
	ID              string  `json:"id" gorm:"default:gen_random_uuid();"`
	Name            string  `json:"name"`
	Description     string  `json:"description"`
	DiscountPercent float64 `json:"discount_percent"`
	Active          bool    `json:"active"`
	CreatedAt       time.Time
	UpdatedAt       time.Time
	DeletedAt       gorm.DeletedAt `gorm:"index"`

	Products []Product `json:"products" gorm:"foreignKey:DiscountID"`
}

type OrderDetails struct {
	ID        string  `json:"id" gorm:"default:gen_random_uuid();"`
	UserID    string  `json:"user_id"`
	Total     float64 `json:"total"`
	PaymentID int     `json:"payment_id"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}

type OrderItem struct {
	ID        string `json:"id" gorm:"default:gen_random_uuid();"`
	OrderID   string `json:"order_id"`
	ProductID string `json:"product_id"`
	Quantity  int    `json:"quantity"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}

type PaymentDetails struct {
	ID        string `json:"id" gorm:"default:gen_random_uuid();"`
	OrderID   string `json:"order_id"`
	Amount    int    `json:"amount"`
	Provider  string `json:"provider"`
	Status    string `json:"status"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}

type ShoppingSession struct {
	ID        string  `json:"id" gorm:"default:gen_random_uuid();"`
	UserID    string  `json:"user_id"`
	Total     float64 `json:"total"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`

	CartItems []CartItem `json:"cart_items" gorm:"foreignKey:SessionID"`
}

type CartItem struct {
	ID        string `json:"id" gorm:"default:gen_random_uuid();"`
	SessionID string `json:"session_id"`
	ProductID int    `json:"product_id"`
	Quantity  int    `json:"quantity"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}

type UserAddress struct {
	ID          string `json:"id" gorm:"default:gen_random_uuid();"`
	UserID      string `json:"user_id"`
	AddressLine string `json:"address_line"`
	City        string `json:"city"`
	PostalCode  string `json:"postal_code"`
	Country     string `json:"country"`
	Mobile      string `json:"mobile"`
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeletedAt   gorm.DeletedAt `gorm:"index"`
}

type UserPayment struct {
	ID          string    `json:"id" gorm:"default:gen_random_uuid();"`
	UserID      string    `json:"user_id"`
	PaymentType string    `json:"payment_type"`
	Provider    string    `json:"provider"`
	AccountNo   string    `json:"account_no"`
	Expiry      time.Time `json:"expiry"`
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeletedAt   gorm.DeletedAt `gorm:"index"`
}
