import { TestBed } from '@angular/core/testing';

import { MycanactivateGuard } from './mycanactivate.guard';

describe('MycanactivateGuard', () => {
  let guard: MycanactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MycanactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
