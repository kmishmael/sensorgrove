package main

import (
	"fmt"
	"log"
	"math/rand"
	"os"
	"time"

	"github.com/joho/godotenv"

	"github.com/kmishmael/sensorgrove/internal/core/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

// Define your models here...

func main() {
	// Define your PostgreSQL connection string
	err := godotenv.Load()

	if err != nil {
		log.Print("Error loading .env file, proceding assuming it is maintained by an external service")
	}
	dsn := os.Getenv("DATABASE_URL")

	// Open a connection to the database
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info), // Set logger mode
	})
	if err != nil {
		log.Fatalf("Error connecting to database: %v", err)
	}

	// Migrate the schema (optional)
	//db.AutoMigrate(&models.User{}, &models.Account{}, &models.Product{}, &models.ProductImage{}, &models.ProductReview{}, &models.ProductCategory{}, &models.ProductInventory{}, &models.Discount{}, &models.OrderDetails{}, &models.OrderItem{}, &models.PaymentDetails{}, &models.ShoppingSession{}, &models.CartItem{}, &models.UserAddress{}, &models.UserPayment{})

	rand.Seed(time.Now().UnixNano())

	// Create sample data for User model

	productCategories := []models.ProductCategory{
		{
			Name:        "Laptops",
			Slug:        "laptops",
			Description: "laptops",
			ImageUrl:    func(str string) *string { return &str }("https://res.cloudinary.com/diwjflfz7/image/upload/v1712048054/sensorgrove/categories/laptop-showcase_wckmuc.png"),
		},
		{
			Name:        "Smartphones",
			Slug:        "smartphones",
			Description: "smartphones",
			ImageUrl:    func(str string) *string { return &str }("https://res.cloudinary.com/diwjflfz7/image/upload/v1712048049/sensorgrove/categories/iphone-lineup_krlnjy.png"),
		},
		{
			Name:        "Gaming",
			Slug:        "gaming",
			Description: "gaming",
			ImageUrl:    func(str string) *string { return &str }("https://res.cloudinary.com/diwjflfz7/image/upload/v1712048047/sensorgrove/categories/gaming_ghlpqy.png"),
		},
		{
			Name:        "Wearables",
			Slug:        "wearables",
			Description: "wearables",
			ImageUrl:    func(str string) *string { return &str }("https://res.cloudinary.com/diwjflfz7/image/upload/v1712048060/sensorgrove/categories/wearables_okwyu2.png"),
		},
		{
			Name:        "Accessories",
			Slug:        "accessories",
			Description: "accessories",
			ImageUrl:    func(str string) *string { return &str }("https://res.cloudinary.com/diwjflfz7/image/upload/v1712048047/sensorgrove/categories/accessories_a1jejj.png"),
		},
	}

	for _, ct := range productCategories {

		err = db.Create(&ct).Error
		if err != nil {
			log.Fatalf("Error seeding Product category data: %v", err)
		}
	}

	productImages := [][]string{
		{
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712086854/sensorgrove/laptops/laptop_1_irr4qd.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712086853/sensorgrove/laptops/laptop_2_nqjjq0.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712086852/sensorgrove/laptops/laptop_3_nlsqzl.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712086851/sensorgrove/laptops/laptop_4_lxj77v.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712086849/sensorgrove/laptops/laptop_5_tdnfgn.jpg",
		},
		{
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712086848/sensorgrove/laptops/lenovo_2_p1oubc.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712086848/sensorgrove/laptops/lenovo_4_c0xbtj.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712086848/sensorgrove/laptops/lenovo_1_b70omw.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712086848/sensorgrove/laptops/lenovo_3_l58trg.jpg",
		},
		{
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087168/sensorgrove/smartphones/samsung_2_tguksu.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087166/sensorgrove/smartphones/samsung_3_ghxida.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087165/sensorgrove/smartphones/samsung_1_oqjodn.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087057/sensorgrove/smartphones/iphone_2_mt8n5v.jpg",
		},
		{
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087324/sensorgrove/smartphones/iphone14_2_ze2lww.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087322/sensorgrove/smartphones/iphone14_4_ccx8tg.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087321/sensorgrove/smartphones/iphone14_1_q5w2lf.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087321/sensorgrove/smartphones/iphone14_3_eckwup.jpg",
		},
		{
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087406/sensorgrove/gaming/ps4_3_cf6g4j.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087404/sensorgrove/gaming/ps4_2_mcj9us.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087403/sensorgrove/gaming/ps4_1_p9yvyi.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087400/sensorgrove/gaming/ps4_4_prh8is.jpg",
		},
		{
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087481/sensorgrove/gaming/xbox_4_hzrg5i.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087478/sensorgrove/gaming/xbox_2_ylyyhr.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087477/sensorgrove/gaming/xbox_1_zf7wxw.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087475/sensorgrove/gaming/xbox_3_xvxrca.jpg",
		},
		{
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087563/sensorgrove/wearables/galaxy-watch_3_iik2xr.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087560/sensorgrove/wearables/galaxy-watch_2_izpirk.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087550/sensorgrove/wearables/galaxy-watch_1_oxuod0.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087549/sensorgrove/wearables/galaxy-watch_4_gbwvne.jpg",
		},
		{
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087624/sensorgrove/wearables/apple-watch_3_n70msg.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087625/sensorgrove/wearables/apple-watch_2_xtmymz.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087621/sensorgrove/wearables/apple-watch_4_e2251q.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087620/sensorgrove/wearables/apple-watch_1_jt8jhc.jpg",
		},
		{
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087719/sensorgrove/accessories/seinhesser_4_pgpmxz.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087725/sensorgrove/accessories/seinhesser_3_nrphzv.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087721/sensorgrove/accessories/seinhesser_1_ivpjpk.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087718/sensorgrove/accessories/seinhesser_2_xurxqc.jpg",
		},
		{
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087803/sensorgrove/accessories/logitech-keyboard_1_cv9txh.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087801/sensorgrove/accessories/logitech-keyboard_3_icpfbm.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087798/sensorgrove/accessories/logitech-keyboard_2_yg7zx5.jpg",
			"https://res.cloudinary.com/diwjflfz7/image/upload/v1712087796/sensorgrove/accessories/logitech-keyboard_4_pq7gd9.jpg",
		},
	}

	products := []models.Product{
		// laptops
		{
			ID:          "1197ca4d-9e39-49dd-89b4-e6ee1e8cd3a9",
			Slug:        "dell-xps-15-7590",
			Name:        "Dell XPS 15 7590",
			Description: "Dell XPS Laptop: Showcase your skills with this Dell XPS 15 laptop. The Intel Core i7 and 16GB of RAM handle heavy-duty coursework while allowing you to run chat and other programs simultaneously, and the spacious 512GB SSD reduces install times and loads games quickly. This Dell XPS 15 laptop includes an NVIDIA GeForce GTX 1650 graphics card for immersive visuals and to handle midrange photo editing and videography applications.",
			SKU:         "XPS7590-7992SLV-PUS",
			CategoryID:  "925f65b6-b331-46f0-b9f3-07682adfc1f3",
			Price:       1562,
		},
		{
			ID:          "25df907d-1c81-4b17-89bc-336e36068bbe",
			Slug:        "lenovo-thinkpad-p14s-gen-2-14inch",
			Name:        "Lenovo ThinkPad P14s Gen 2 14\" FHD Touchscreen",
			Description: "Processor: Core i7-1165G7 4 core (2.8-4.7 GHz) Features: 32GB RAM, 1TB NVMe, Fingerprint Reader, Backlit KYB, WiFi 6",
			SKU:         "",
			CategoryID:  "925f65b6-b331-46f0-b9f3-07682adfc1f3",
			Price:       165,
		},
		// smartphones
		{
			ID:          "2b72ee80-b28a-4b5b-9d0c-d583e31b6ad7",
			Slug:        "samsung-galaxy-a54",
			Name:        "SAMSUNG Galaxy A54 5G + 4G LTE (128GB + 6GB)",
			Description: "Bright & clear display: Love what you see. The 16.31cm (6.4\") FHD+ Infinity-O display offers a vibrant view and a silky smooth screen time with a refresh rate of 120 Hz. You can also enjoy outdoor visibility on the 1000 nits screen, even when the sun is shining bright. Record amazing videos with ease: With VDIS and a wider angle OIS, the Galaxy A54 5G helps you shoot high-quality videos with ease through auto cropping and auto focus. Relive your vibrant nights with Nightography: Awesome Nightography - Just take the shot. Galaxy A54 5G captures vivid photos with the advanced image sensor and big pixels. When its dark, your camera automatically shifts to night mode. Built for the rough & tough: Get ready for the frontier. The IP67 water and dust resistance rating of Galaxy A54 keeps you in the clear, with durability for both shallow waters and dusty roads.",
			SKU:         "B0BY3G6PLF",
			CategoryID:  "4bccc5c1-ea06-44e3-8768-19ea545ed12c",
			Price:       315,
		},
		{
			ID:          "b7601c15-15b0-43b4-bf76-119e7ed66632",
			Slug:        "apple-iphone-13-pro",
			Name:        "Apple iPhone 13 Pro, 128GB, Sierra Blue",
			Description: "iPhone 13 Pro, 128GB, Sierra Blue - Unlocked (Renewed)",
			SKU:         "B09LPB9SQH",
			CategoryID:  "4bccc5c1-ea06-44e3-8768-19ea545ed12c",
			Price:       460.72,
		},
		// gaming
		{
			ID:          "1b51824f-23f0-4ae1-a3c7-aa0fc8efee95",
			Slug:        "sony-playstation",
			Name:        "Sony Playstation PS4 1TB Black Console",
			Description: "Incredible games; Endless entertainment.All new lighter slimmer PS4. 1 TB hard drive. Blu-ray technology, delivers exceptional video quality. Redefine your gaming expectations and immerse yourself in moments so intense your intuition takes over.",
			SKU:         "B012CZ41ZA",
			CategoryID:  "91d1f8c9-066c-4b62-9e11-2e5020816770",
			Price:       308.99,
		},
		{
			ID:          "d9391695-04b9-408e-aca5-0a02fd2bb7eb",
			Slug:        "xbox-series-x",
			Name:        "Xbox Series X 1TB SSD Console",
			Description: "Xbox Series X, the fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture. Enjoy thousands of games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever. And when you add Xbox Game Pass Ultimate (membership sold separately), you get online multiplayer to play with friends and an instant library of 100+ high-quality games, including day one releases from Xbox Game Studios.*",
			SKU:         "B08H75RTZ8",
			CategoryID:  "91d1f8c9-066c-4b62-9e11-2e5020816770",
			Price:       436.98,
		},
		// wearables
		{
			ID:          "23d5ebc6-fb86-4c64-9f21-47f83f105c66",
			Slug:        "samsung-galaxy-watch-6",
			Name:        "Samsung Galaxy Watch 6 44mm Smartwatch",
			Description: "*Requires smartphone with Android 8.0 or later, 1.5GB or more RAM and Samsung Health app version 6.22 or later. **Available only for running workouts. Requires initial set up of 10 minutes of outside running with GPS on; smartphone with Android 8.0 or later, 1.5GB or more RAM and Samsung Health app version 6.22 or later. ***Phone must be within 2 feet of user with snore detection enabled through Samsung Health app version 6.22 or later. ****Requires Samsung Galaxy Smartphone with Android 7.0 or later, and Samsung Health Monitor app (available only at the Samsung Galaxy app store). The ECG Monitor App intended for adults 22 years and older analyzes pulse rate data to identify episodes of irregular heart rhythms suggestive of AFib and provides a notification suggesting the user record an ECG to analyze the heart rhythm. The IHRN feature is not intended to provide a notification on every episode of irregular rhythm suggestive of AFib and the absence of a notification is not intended to indicate no disease process is present; rather the feature is intended to opportunistically acquire pulse rate data when the user is still and analyze the data when determined sufficient toward surfacing a notification. The ECG Monitor App is not intended to replace traditional methods of diagnosis or treatment. The ECG app is not intended for users with known arrhythmias other than AFib or users under 22 years old. Users should not interpret or take clinical action based on the device output without consultation of a qualified healthcare professional. *****The Samsung BIA is a body analyzer that uses bioelectrical impedance analysis (BIA) technology to track body composition based on weight, body fat, body mass index (BMI), skeletal muscle, body water, and basal metabolic rate (BMR) measurements. It is not intended to specifically diagnose or treat a medical condition. ******Compatibility for Galaxy wearable apps: Android 8.0 or later, 1.5GB of RAM. *******44mm Galaxy Watch6 model only. ********Select interchangeable watch bands sold separately.",
			SKU:         "622nd28291",
			CategoryID:  "b5c15878-0f68-47bb-9ddf-e35757d0ac31",
			Price:       279.99,
		},
		{
			ID:          "e5af37a8-8b33-49a8-9128-3eeaa738f8ce",
			Slug:        "apple-watch-series-9",
			Name:        "Apple Watch Series 9 [GPS + Cellular 45mm] Smartwatch ",
			Description: "WHY APPLE WATCH SERIES 9 — Your essential companion for a healthy life is now even more powerful. The S9 chip enables a superbright display and a magical new way to quickly and easily interact with your Apple Watch without touching the screen. Advanced health, safety, and activity features provide powerful insights and help when you need it. And redesigned apps in watchOS give you more information at a glance.",
			SKU:         "AYQU801",
			CategoryID:  "b5c15878-0f68-47bb-9ddf-e35757d0ac31",
			Price:       379.68,
		},
		// accessories
		{
			ID:          "30c578a5-8a34-4438-90cc-a72ec318ba1a",
			Slug:        "sennheiser-consumer-audio",
			Name:        "Sennheiser Consumer Audio HD 560 S Over-The-Ear Audiophile Headphones",
			Description: "Sennheiser HD 560S With linear acoustics tailored to extended listening sessions and smooth, gratifying bass performance, this headphone was crafted for the analytical audio enthusiast. Sennheiser HD 560S Sennheiser About Sennheiser Sennheiser is shaping the Future of Audio – a vision built on a 75-year history of innovation and a continued drive for excellence that is woven into our company’s DNA and culture. Around the world, our employees share this passion in the pursuit of the perfect sound, creating products that exceed expectations and set new benchmarks in audio. Reveal the truth in your music Today's audiophiles monitor their music with measured purpose on a wide range of devices from headphone amplifiers, audio interfaces, computers, and more. Sennheiser's HD 560S delivers the linear performance required by analytical audio enthusiasts at a breakthrough value, allowing the listener to have an honest look inside their music whether for pleasure or productivity.",
			SKU:         "HD560S",
			CategoryID:  "acd23256-346e-4e7b-a7d9-2bbf818bfe6c",
			Price:       149.95,
		},
		{
			ID:          "35d8fcea-d269-4fdc-9f23-fe04ac39034f",
			Slug:        "logitech-g213-prodigy",
			Name:        "Logitech G213 Prodigy Gaming Keyboard,",
			Description: "G213 Prodigy slim body is durable, precise, and spill-resistant, G213 Prodigy is designed for the way you play. With performance tuned keys, G213 Prodigy brings together the best in tactile feel and gaming-grade performance. Keys on the G213 Prodigy are tuned to deliver ultra-quick, responsive feedback that is up to 4 times faster than the keys on standard keyboards, while the anti-ghosting gaming Matrix keeps you in control even when multiple keys are pressed simultaneously. Add a personal touch to your system with customizable RGB lighting Zones or play, pause, and mute music and videos instantly with media controls. G213 Prodigy is a full-sized keyboard designed for gaming and productivity.",
			SKU:         "G213",
			CategoryID:  "acd23256-346e-4e7b-a7d9-2bbf818bfe6c",
			Price:       1562,
		},
	}

	for idx, pc := range products {
		randomNumber := rand.Intn(11) + 10
		productInventory := models.ProductInventory{
			Quantity: randomNumber,
		}

		err = db.Create(&productInventory).Error
		if err != nil {
			log.Fatalf("Error seeding Product Inventory data: %v", err)
		}
		pc.InventoryID = &productInventory.ID

		err = db.Create(&pc).Error
		if err != nil {
			log.Fatalf("Error seeding Product Category data: %v", err)
		}
		for _, image := range productImages[idx] {
			productImage := models.ProductImage{
				ProductID: pc.ID,
				URL:       image,
			}
			err = db.Create(&productImage).Error
			if err != nil {
				log.Fatalf("Error seeding Product images data: %v", err)
			}
		}
	}

	// Create sample data for other models similarly

	seedReviews(db)

	fmt.Println("Data seeded successfully")
}

func seedReviews(db *gorm.DB) {
	reviews := []models.ProductReview{
		{ProductID: "1197ca4d-9e39-49dd-89b4-e6ee1e8cd3a9", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 4, Title: "Great", Comment: func(str string) *string { return &str }("Great product!")},
		{ProductID: "1197ca4d-9e39-49dd-89b4-e6ee1e8cd3a9", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 5, Title: "Great", Comment: func(str string) *string { return &str }("Excellent quality.")},
		{ProductID: "25df907d-1c81-4b17-89bc-336e36068bbe", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 3, Title: "Great", Comment: func(str string) *string { return &str }("Average product.")},
		{ProductID: "25df907d-1c81-4b17-89bc-336e36068bbe", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 4, Title: "Great", Comment: func(str string) *string { return &str }("Windows Modern Standby has not been fixed.")},
		{ProductID: "2b72ee80-b28a-4b5b-9d0c-d583e31b6ad7", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 4, Title: "Great", Comment: func(str string) *string { return &str }("Power modes is a mess, good laptop overall.")},
		{ProductID: "2b72ee80-b28a-4b5b-9d0c-d583e31b6ad7", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 4, Title: "As expected", Comment: func(str string) *string { return &str }("Great product!")},
		{ProductID: "b7601c15-15b0-43b4-bf76-119e7ed66632", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 5, Title: "As expected", Comment: func(str string) *string { return &str }("Excellent quality.")},
		{ProductID: "b7601c15-15b0-43b4-bf76-119e7ed66632", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 3, Title: "As expected", Comment: func(str string) *string { return &str }("Average product.")},
		{ProductID: "1b51824f-23f0-4ae1-a3c7-aa0fc8efee95", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 4, Title: "As expected", Comment: func(str string) *string { return &str }("Windows Modern Standby has not been fixed.")},
		{ProductID: "1b51824f-23f0-4ae1-a3c7-aa0fc8efee95", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 4, Title: "As expected", Comment: func(str string) *string { return &str }("Power modes is a mess, good laptop overall.")},
		{ProductID: "d9391695-04b9-408e-aca5-0a02fd2bb7eb", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 4, Title: "Amazing", Comment: func(str string) *string { return &str }("Great product!")},
		{ProductID: "d9391695-04b9-408e-aca5-0a02fd2bb7eb", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 5, Title: "Amazing", Comment: func(str string) *string { return &str }("Excellent quality.")},
		{ProductID: "23d5ebc6-fb86-4c64-9f21-47f83f105c66", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 3, Title: "Amazing", Comment: func(str string) *string { return &str }("Average product.")},
		{ProductID: "23d5ebc6-fb86-4c64-9f21-47f83f105c66", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 4, Title: "Amazing", Comment: func(str string) *string { return &str }("Windows Modern Standby has not been fixed.")},
		{ProductID: "e5af37a8-8b33-49a8-9128-3eeaa738f8ce", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 4, Title: "Amazing", Comment: func(str string) *string { return &str }("Power modes is a mess, good laptop overall.")},
		{ProductID: "e5af37a8-8b33-49a8-9128-3eeaa738f8ce", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 4, Title: "Can't complain", Comment: func(str string) *string { return &str }("Great product!")},
		{ProductID: "30c578a5-8a34-4438-90cc-a72ec318ba1a", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 5, Title: "Can't complain", Comment: func(str string) *string { return &str }("Excellent quality.")},
		{ProductID: "30c578a5-8a34-4438-90cc-a72ec318ba1a", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 3, Title: "Can't complain", Comment: func(str string) *string { return &str }("Average product.")},
		{ProductID: "35d8fcea-d269-4fdc-9f23-fe04ac39034f", UserID: "1e41d0f7-04ec-48ac-9c63-96c4eadca6f3", Rating: 4, Title: "Can't complain", Comment: func(str string) *string { return &str }("Windows Modern Standby has not been fixed.")},
		{ProductID: "35d8fcea-d269-4fdc-9f23-fe04ac39034f", UserID: "79df9536-8726-400f-a324-8839ca1cb258", Rating: 4, Title: "Can't complain", Comment: func(str string) *string { return &str }("Power modes is a mess, good laptop overall.")},

		// Add more reviews as needed
	}

	for _, review := range reviews {
		if err := db.Create(&review).Error; err != nil {
			log.Fatalf("Failed to seed reviews: %v", err)
		}
	}

	fmt.Println("Reviews seeded successfully.")
}