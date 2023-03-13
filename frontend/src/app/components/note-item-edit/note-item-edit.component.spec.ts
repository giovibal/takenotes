import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteItemEditComponent } from './note-item-edit.component';

describe('NoteItemEditComponent', () => {
  let component: NoteItemEditComponent;
  let fixture: ComponentFixture<NoteItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteItemEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
