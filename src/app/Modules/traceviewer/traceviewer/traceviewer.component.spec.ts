import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceviewerComponent } from './traceviewer.component';

describe('TraceviewerComponent', () => {
  let component: TraceviewerComponent;
  let fixture: ComponentFixture<TraceviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
