package main

import (
	"log"
	"net/http"

	"github.com/BlvckM1nds/Dapoer-Sariwangi/server/config"
	"github.com/gin-gonic/gin"
)

func main() {
	client, err := config.CreateClient()
	if err != nil {
		log.Printf("Internal server error %v", err)
		return
	}

	log.Println(client)

	r := gin.Default()

	r.Use(config.CORSConfig())

	r.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"success": true,
			"message": "Hi there, this is an API endpoint!",
		})
	})

	r.GET(config.API_VERSION, func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"success": true,
			"message": "Hi, you're currently at Dapoer Sariwangi!",
		})
	})

	r.Run("localhost:8080")
}
