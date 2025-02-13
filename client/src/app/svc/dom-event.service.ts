import { Injectable } from '@angular/core';
import { Unsubscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class svc_dom_event_service {
  on(event: string, el: Element, cb: () => void): Unsubscribable {
    el.addEventListener(event, cb);
    return { unsubscribe: () => el.removeEventListener(event, cb) };
  }
  
  once(event: string, el: Element, cb: () => void): Unsubscribable {
    let rt: Unsubscribable | undefined;
    const _cb = () => {
      cb();
      rt!.unsubscribe();
    }
    rt = { unsubscribe: () => el.removeEventListener(event, _cb) };
    el.addEventListener(event, _cb);
    return rt;
  }
}