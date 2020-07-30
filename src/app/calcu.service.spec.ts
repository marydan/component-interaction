import { TestBed } from '@angular/core/testing';

import { CalcuService } from './calcu.service';

describe('CalcuService', () => {
  let service: CalcuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
