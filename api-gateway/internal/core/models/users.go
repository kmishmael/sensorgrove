package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	ID            string  `json:"id" gorm:"default:gen_random_uuid();"`
	Email         string  `json:"email" gorm:"index"`
	Username      *string `json:"username"`
	Password      string  `json:"password"`
	Name          *string `json:"name"`
	Telephone     *string `json:"telephone"`
	EmailVerified bool    `json:"email_verified" gorm:"default:false"`
	ImageUrl      *string `json:"image"`
	AvatarUrl     *string `json:"avatar_url"`
	CreatedAt     time.Time
	UpdatedAt     time.Time
	DeletedAt     gorm.DeletedAt `gorm:"index"`
}

type Account struct {
	ID                string  `json:"id" gorm:"default:gen_random_uuid();"`
	Type              string  `json:"type"`
	Provider          string  `json:"provider"`
	ProviderAccountId string  `json:"provider_account_id"`
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
