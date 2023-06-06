import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCreationInternetComponent } from './process-creation-internet.component';

describe('ProcessCreationInternetComponent', () => {
  let component: ProcessCreationInternetComponent;
  let fixture: ComponentFixture<ProcessCreationInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCreationInternetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessCreationInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
