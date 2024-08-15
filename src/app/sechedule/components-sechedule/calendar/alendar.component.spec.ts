import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlendarComponent } from './alendar.component';

describe('AlendarComponent', () => {
  let component: AlendarComponent;
  let fixture: ComponentFixture<AlendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
