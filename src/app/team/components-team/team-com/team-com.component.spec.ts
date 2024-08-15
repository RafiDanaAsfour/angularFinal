import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComComponent } from './team-com.component';

describe('TeamComComponent', () => {
  let component: TeamComComponent;
  let fixture: ComponentFixture<TeamComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
