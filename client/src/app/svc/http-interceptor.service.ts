import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import type{ api_response_t } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class svc_http_interceptor_service {
  intercept(rqs: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    rqs = rqs.clone({
      setHeaders: {
        'x-lyt-client-version': "1.0"
      }
    });
    return next
      .handle(rqs)
      .pipe(catchError((ex: HttpErrorResponse) => of(new HttpResponse({
        body: ex.error ?? <api_response_t<unknown>>{ errors: [{ message: ex.message }] },
        headers: ex.headers,
        status: ex.status,
        statusText: ex.statusText,
        url: ex.url ?? undefined
      }))));
  }
}
