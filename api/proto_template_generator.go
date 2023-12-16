package main

import (
	"flag"
	"log"
	"os"
	"strings"
	"text/template"

	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

type TemplateData struct {
	Name          string
	NameLowerCase string
}

func main() {
	entityName := flag.String("n", "Entity", "entity name: use case as you want, it will converted in 'Entity' and 'entity'")
	flag.Parse()

	entityNameCapital := title(*entityName)
	entityNameLowerCase := strings.ToLower(*entityName)

	log.Printf("Using Name: %s", entityNameCapital)
	log.Printf("Using NameLowerCase: %s", entityNameLowerCase)

	data := &TemplateData{
		Name:          entityNameCapital,
		NameLowerCase: entityNameLowerCase,
	}

	t, err := template.New("entity.tpl").ParseFiles("entity.tpl")
	if err != nil {
		panic(err)
	}
	err = t.Execute(os.Stdout, data)
	if err != nil {
		panic(err)
	}
}

func title(s string) string {
	caser := cases.Title(language.Und)
	return caser.String(s)
}
