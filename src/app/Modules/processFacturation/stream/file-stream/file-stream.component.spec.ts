import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileStreamComponent } from './file-stream.component';

describe('FileStreamComponentComponent', () => {
  let component: FileStreamComponent;
  let fixture: ComponentFixture<FileStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileStreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
