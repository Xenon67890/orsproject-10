import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemevenListtComponent } from './systemeven-listt.component';

describe('SystemevenListtComponent', () => {
  let component: SystemevenListtComponent;
  let fixture: ComponentFixture<SystemevenListtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemevenListtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemevenListtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
