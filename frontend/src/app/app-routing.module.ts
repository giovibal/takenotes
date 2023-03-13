import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteItemEditComponent } from './components/note-item-edit/note-item-edit.component';
import { NoteItemNewComponent } from './components/note-item-new/note-item-new.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { NoteListComponent } from './components/note-list/note-list.component';

const routes: Routes = [
  {path: '', component: NoteListComponent},
  {path: 'notes', component: NoteListComponent},
  {path: 'notes/:id', component: NoteItemComponent},
  {path: 'notes/:id/edit', component: NoteItemEditComponent},
  {path: 'notes-new', component: NoteItemNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
