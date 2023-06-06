import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessResilationNetComponent } from './process-resilation-net.component';

describe('ProcessResilationNetComponent', () => {
  let component: ProcessResilationNetComponent;
  let fixture: ComponentFixture<ProcessResilationNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessResilationNetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessResilationNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
