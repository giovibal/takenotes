import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MenubarComponent } from './components/menubar/menubar.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { NoteItemEditComponent } from './components/note-item-edit/note-item-edit.component';
import { NoteItemNewComponent } from './components/note-item-new/note-item-new.component';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    NoteListComponent,
    NoteItemComponent,
    NoteItemEditComponent,
    NoteItemNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
