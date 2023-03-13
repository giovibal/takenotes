import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/Note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.sass']
})
export class NoteItemComponent implements OnInit {
  note: Note = {
    id: '',
    name: '',
    hours: 0,
    visits: 0
  };
  
  constructor(
    private route: ActivatedRoute, 
    private notesService: NotesService
  ) {}
  
  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id')!;
    this.notesService.getNote(id).subscribe(val => this.note = val);
  }
}
