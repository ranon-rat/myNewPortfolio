package router

import (
	"log"
	"net/http"
	"os"

	"github.com/ranon-rat/portofolio/controllers"
)

func SetupRouter() {
	
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/", fs)
	http.HandleFunc("/contact", controllers.Contact)
	envPort := os.Getenv("port")
	if envPort == "" {
		envPort = "8080"
	}
	log.Println("service working in http://localhost:" + envPort)
	http.ListenAndServe(":"+envPort, nil)
}
