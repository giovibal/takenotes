package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/giovibal/takenotes/backend/internal/model"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/go-chi/render"
	"github.com/google/uuid"
)

const (
	httpPort = 3000
)

func startHttpServer() error {

	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(render.SetContentType(render.ContentTypeJSON))

	// Basic CORS
	// for more ideas, see: https://developer.github.com/v3/#cross-origin-resource-sharing
	r.Use(cors.Handler(cors.Options{
		// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
		AllowedOrigins: []string{"https://*", "http://*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Take Notes !!"))
	})
	r.Get("/config", getConfig)
	r.Post("/config", postConfig)
	r.Get("/notes", getNotes)
	r.Post("/notes", postNotes)
	r.Get("/notes/{id}", getNoteByID)
	r.Put("/notes/{id}", putNoteByID)
	r.Delete("/notes/{id}", deleteNoteByID)

	err := http.ListenAndServe(fmt.Sprintf(":%d", httpPort), r)
	if err != nil {
		log.Println("*** Error closing http server", err)
		return err
	}

	log.Printf("Stopped http server on port: %d\n", httpPort)
	return nil
}

func getConfig(w http.ResponseWriter, r *http.Request) {

}

func postConfig(w http.ResponseWriter, r *http.Request) {

}

func getNotes(w http.ResponseWriter, r *http.Request) {

}

func postNotes(w http.ResponseWriter, r *http.Request) {
	id := uuid.NewString()
	n := createFakeNote(id)
	render.JSON(w, r, n)
}

func getNoteByID(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	n := createFakeNote(id)
	render.JSON(w, r, n)
}

func putNoteByID(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	n := createFakeNote(id)
	render.JSON(w, r, n)
}

func deleteNoteByID(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	n := createFakeNote(id)
	render.JSON(w, r, n)
}

func createFakeNote(id string) model.Note {
	return model.Note{
		ID:        id,
		Label:     fmt.Sprintf("Label %s", id),
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}
}
