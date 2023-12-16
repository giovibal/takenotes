package model

import "time"

type FieldType struct {
	ID    string `json:"id"`
	Label string `json:"label"`
}

type Config struct {
	Fields    []FieldType `json:"fields"`
	CreatedAt time.Time   `json:"createdAt"`
	UpdatedAt time.Time   `json:"updatedAt"`
}

type Field struct {
	ID    string `json:"id"`
	Value int64  `json:"value"`
}

type Note struct {
	ID        string    `json:"id"`
	Label     string    `json:"label"`
	Fields    []Field   `json:"fields"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}
