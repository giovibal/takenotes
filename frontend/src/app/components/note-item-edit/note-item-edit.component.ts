import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-note-item-edit',
  templateUrl: './note-item-edit.component.html',
  styleUrls: ['./note-item-edit.component.css']
})
export class NoteItemEditComponent {

  noteItemForm = this.fb.group({
    name: [''],
    hours: [0],
    visits: [0],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.noteItemForm.value);
  }
}
