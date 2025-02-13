import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { svc_http_interceptor_service } from './http-interceptor.service';
import { svc_dom_event_service } from './dom-event.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    svc_http_interceptor_service,
    svc_dom_event_service
  ]
})
export class svc_module { }
