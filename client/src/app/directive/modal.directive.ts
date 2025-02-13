import { Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Modal } from 'bootstrap';
import { Unsubscribable } from 'rxjs';
import { svc_dom_event_service } from '../svc/dom-event.service';

@Directive({
  selector: '[lyt-modal]'
})
export class modal_directive implements OnDestroy {
  constructor(private _el: ElementRef<HTMLDivElement>, evt_svc: svc_dom_event_service) {
    _el.nativeElement.tabIndex = -1;
    _el.nativeElement.classList.add('modal');
    this._hidden_evt = evt_svc.on('hidden.bs.modal', this._el.nativeElement, () => {
      if(modal_directive._shown === this) {
        modal_directive._shown = undefined;
      }
      this.hidden.next(this._el.nativeElement.id);
    });
    this._shown_evt = evt_svc.on('shown.bs.modal', this._el.nativeElement, () => {
      this._el.nativeElement.querySelector<HTMLInputElement>('[autofocus]')?.focus();
      this.shown.next(this._el.nativeElement.id);
    });
  }

  hide() {
    if(modal_directive._shown === this) {
      this._modal?.hide();
    }
  }

  ngOnDestroy(): void {
    this._hidden_evt.unsubscribe();
    this._shown_evt.unsubscribe();
    this._modal?.dispose();
  }

  show() {
    if(modal_directive._shown === this) {
      this._modal?.show();
    }
    else {
      modal_directive._shown?._modal?.hide();
      if(!this._modal) {
        this._modal = new Modal(this._el.nativeElement);
      }
      this._modal.show();
      modal_directive._shown = this;
    }
  }

  @Output() hidden = new EventEmitter<string>();
  @Output() shown = new EventEmitter<string>();
  private _hidden_evt: Unsubscribable;
  private _modal?: Modal;
  private _shown_evt: Unsubscribable;
  private static _shown?: modal_directive;
}
