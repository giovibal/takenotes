import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteItemNewComponent } from './note-item-new.component';

describe('NoteItemNewComponent', () => {
  let component: NoteItemNewComponent;
  let fixture: ComponentFixture<NoteItemNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteItemNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteItemNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
