import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAjouPNomComponent } from './process-ajou-pnom.component';

describe('ProcessAjouPNomComponent', () => {
  let component: ProcessAjouPNomComponent;
  let fixture: ComponentFixture<ProcessAjouPNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessAjouPNomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessAjouPNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
