import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupercoolComponent } from './supercool.component';

describe('SupercoolComponent', () => {
  let component: SupercoolComponent;
  let fixture: ComponentFixture<SupercoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupercoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupercoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
