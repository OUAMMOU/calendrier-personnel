import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBasixAuthService } from './http-intercepter-basix-auth.service';

describe('HttpIntercepterBasixAuthService', () => {
  let service: HttpIntercepterBasixAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntercepterBasixAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
