import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSupprPNomComponent } from './processSupprPNom.component';

describe('ProcessSupprPNomComponent', () => {
  let component: ProcessSupprPNomComponent;
  let fixture: ComponentFixture<ProcessSupprPNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessSupprPNomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessSupprPNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
