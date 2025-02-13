import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';

import { app_component } from './app.component';
import { svc_http_interceptor_service } from './svc/http-interceptor.service';
import { app_route_module } from './app.route.module';
import { svc_module } from './svc/svc.module';

@NgModule({
  declarations: [
    app_component
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    app_route_module,
    svc_module
  ],
  providers: [
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: svc_http_interceptor_service, multi: true }
  ],
  bootstrap: [app_component]
})
export class app_module {
  constructor(icon_lib: FaIconLibrary) {
    icon_lib.addIconPacks(fab, far, fas);
  }
}
