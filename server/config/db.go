package config

import (
	"context"
	"log"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
)

func CreateClient() (*firestore.Client, error) {
	// Test local connection
	ctx := context.Background()
	conf := &firebase.Config{ProjectID: "dapoer-sariwangi"}

	app, err := firebase.NewApp(ctx, conf)
	if err != nil {
		log.Printf("Error initializing app, %v", err)
		return nil, err
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Print("Error when creating client")
		log.Fatalln(err)
	}

	return client, nil
}
