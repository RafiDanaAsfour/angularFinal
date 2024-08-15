import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecheduleComComponent } from './sechedule-com.component';

describe('SecheduleComComponent', () => {
  let component: SecheduleComComponent;
  let fixture: ComponentFixture<SecheduleComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecheduleComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecheduleComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
