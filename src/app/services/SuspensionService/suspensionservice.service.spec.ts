import { TestBed } from '@angular/core/testing';

import { SuspensionserviceService } from './suspensionservice.service';

describe('SuspensionserviceService', () => {
  let service: SuspensionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuspensionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
