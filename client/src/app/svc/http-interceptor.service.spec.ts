import { TestBed } from '@angular/core/testing';

import { svc_http_interceptor_service } from 'src/svc/http-interceptor.service';

describe('HttpInterceptorService', () => {
  let service: svc_http_interceptor_service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(svc_http_interceptor_service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
