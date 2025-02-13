import { TestBed } from '@angular/core/testing';

import { svc_base_service } from './base.service';

describe('BaseService', () => {
  let service: svc_base_service<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(svc_base_service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
