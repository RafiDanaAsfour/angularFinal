import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyHawkinsComponent } from './guy-hawkins.component';

describe('GuyHawkinsComponent', () => {
  let component: GuyHawkinsComponent;
  let fixture: ComponentFixture<GuyHawkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuyHawkinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuyHawkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
