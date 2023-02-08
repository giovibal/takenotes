package main

import (
	"fmt"
	"log"

	"github.com/TwiN/go-color"
)

func main() {
	fmt.Println(color.InPurple("******************"))
	fmt.Printf("%s %s %s\n", color.InPurple("***"), color.InYellow("Take Notes"), color.InPurple("***"))
	fmt.Println(color.InPurple("******************"))

	err := startHttpServer()
	if err != nil {
		log.Println("*** Error closing http server", err)
	}
}
