import { svc_dom_event_service } from 'src/svc/dom-event.service';
import { modal_directive } from './modal.directive';

describe('ModelDirective', () => {
  it('should create an instance', () => {
    const directive = new modal_directive({ nativeElement: document.createElement('div') }, new svc_dom_event_service());
    expect(directive).toBeTruthy();
  });
});
