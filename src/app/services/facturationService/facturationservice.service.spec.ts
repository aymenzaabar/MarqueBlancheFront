import { TestBed } from '@angular/core/testing';

import { FacturationserviceService } from './facturationservice.service';

describe('FacturationserviceService', () => {
  let service: FacturationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
