import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RonaldRichardsComponent } from './ronald-richards.component';

describe('RonaldRichardsComponent', () => {
  let component: RonaldRichardsComponent;
  let fixture: ComponentFixture<RonaldRichardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RonaldRichardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RonaldRichardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
