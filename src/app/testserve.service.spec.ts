import { TestBed } from '@angular/core/testing';

import { TestserveService } from './testserve.service';

describe('TestserveService', () => {
  let service: TestserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
