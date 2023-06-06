import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialssipComponent } from './credentialssip.component';

describe('CredentialssipComponent', () => {
  let component: CredentialssipComponent;
  let fixture: ComponentFixture<CredentialssipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentialssipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialssipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
