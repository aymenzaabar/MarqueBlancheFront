import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessEchangeComponent } from './processEchange.component';

describe('ProcessEchangeComponent', () => {
  let component: ProcessEchangeComponent;
  let fixture: ComponentFixture<ProcessEchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessEchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessEchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
