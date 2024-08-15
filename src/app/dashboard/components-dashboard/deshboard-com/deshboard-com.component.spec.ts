import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshboardComComponent } from './deshboard-com.component';

describe('DeshboardComComponent', () => {
  let component: DeshboardComComponent;
  let fixture: ComponentFixture<DeshboardComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeshboardComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeshboardComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
