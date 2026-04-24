import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemeventComponent } from './systemevent.component';

describe('SystemeventComponent', () => {
  let component: SystemeventComponent;
  let fixture: ComponentFixture<SystemeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemeventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
