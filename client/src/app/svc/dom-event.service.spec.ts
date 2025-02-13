import { TestBed } from '@angular/core/testing';

import { svc_dom_event_service } from './dom-event.service';

describe('DomEventService', () => {
  let service: svc_dom_event_service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(svc_dom_event_service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
