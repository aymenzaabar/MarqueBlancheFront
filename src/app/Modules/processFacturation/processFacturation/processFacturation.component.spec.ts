import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessFacturationComponent } from './processFacturation.component';

describe('ProcessFactorationComponent', () => {
  let component: ProcessFacturationComponent;
  let fixture: ComponentFixture<ProcessFacturationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessFacturationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessFacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
