import { TestBed } from '@angular/core/testing';

import { MyauthService } from './myauth.service';

describe('MyauthService', () => {
  let service: MyauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
