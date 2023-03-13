import { Injectable } from '@angular/core';
import { Note } from '../Note';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  notes: Note[] = [
    {"id":"a1", "name":"Giovani Baleani", "hours":10, "visits":3},
    {"id":"a2", "name":"Gaia Baleani", "hours":3, "visits":1},
    {"id":"a3", "name":"Greta Baleani", "hours":3, "visits":1},
  ];

  getNotes(): Observable<Note[]> {
    return of(this.notes);
  }
  getNote(id: string): Observable<Note> {
    let noteIdx: number = this.notes.findIndex(el => el.id === id);
    let note: Note = this.notes[noteIdx];
    return of(note);
  }
}
