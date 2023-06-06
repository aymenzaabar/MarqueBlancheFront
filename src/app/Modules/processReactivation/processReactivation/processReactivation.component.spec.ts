import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessReactivationComponent } from './processReactivation.component';

describe('ProcessReactivationComponent', () => {
  let component: ProcessReactivationComponent;
  let fixture: ComponentFixture<ProcessReactivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessReactivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessReactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
