import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymtrainerComponent } from './gymtrainer.component';

describe('GymtrainerComponent', () => {
  let component: GymtrainerComponent;
  let fixture: ComponentFixture<GymtrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymtrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
