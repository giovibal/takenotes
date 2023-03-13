import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/Note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  
  notes: Note[] = [
    {"id":"a1", "name":"Giovani Baleani", "hours":10, "visits":3},
    {"id":"a2", "name":"Gaia Baleani", "hours":3, "visits":1},
    {"id":"a3", "name":"Greta Baleani", "hours":3, "visits":1},
  ];

  displayedColumns = ['id', 'name', 'hours', 'visits', 'actions'];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log('note list OnInit');
  }

  openNote(id: string) {
    this.router.navigate(['notes', id]);
  }

  delete(id: string) {
    alert('delete '+id+ ' ?');
  }

  edit(id: string) {
    this.router.navigate(['notes', id, 'edit']);
  }
}
