import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesIconsComponent } from './notes-icons.component';

describe('NotesIconsComponent', () => {
  let component: NotesIconsComponent;
  let fixture: ComponentFixture<NotesIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
