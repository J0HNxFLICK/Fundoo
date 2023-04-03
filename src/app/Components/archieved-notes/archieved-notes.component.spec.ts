import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchievedNotesComponent } from './archieved-notes.component';

describe('ArchievedNotesComponent', () => {
  let component: ArchievedNotesComponent;
  let fixture: ComponentFixture<ArchievedNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchievedNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchievedNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
