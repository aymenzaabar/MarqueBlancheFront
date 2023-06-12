import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperfacComponent } from './stepperfac.component';

describe('StepperfacComponent', () => {
  let component: StepperfacComponent;
  let fixture: ComponentFixture<StepperfacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperfacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperfacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
