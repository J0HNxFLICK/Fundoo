import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverMailComponent } from './recover-mail.component';

describe('RecoverMailComponent', () => {
  let component: RecoverMailComponent;
  let fixture: ComponentFixture<RecoverMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
