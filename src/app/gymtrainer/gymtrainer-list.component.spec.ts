import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymtrainerListComponent } from './gymtrainer-list.component';

describe('GymtrainerListComponent', () => {
  let component: GymtrainerListComponent;
  let fixture: ComponentFixture<GymtrainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymtrainerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymtrainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
