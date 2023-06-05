import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSuspensionComponent } from './processSuspension.component';

describe('ProcessSuspensionComponent', () => {
  let component: ProcessSuspensionComponent;
  let fixture: ComponentFixture<ProcessSuspensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessSuspensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessSuspensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
