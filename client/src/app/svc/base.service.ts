import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { api_patch_t, api_response_t } from 'src/types';

export class svc_base_service<_t_> {
  constructor(private _base_url: string, protected _http: HttpClient) { }

  create(doc: _t_) {
    return this._http
      .put<api_response_t<string>>(this._base_url, doc);
  }

  delete(id: any) {

  }

  get(id: any) {
    return this._http
      .get<api_response_t<_t_>>(`${this._base_url}/${id}`)
      .pipe(map(x => <api_response_t<_t_>>{ ...x, value: x.value ? this._normalize(x.value) : undefined }));
  }

  get_all() {
    return this._http
      .get<api_response_t<_t_[]>>(this._base_url)
      .pipe(map(x => <api_response_t<_t_[]>>{ ...x, value: x.value ? this._normalize(x.value) : undefined }));
  }

  patch(doc: api_patch_t<_t_>) {

  }

  update(doc: _t_) {
    return this._http
      .post<api_response_t<boolean>>(this._base_url, doc);
  }

  protected _normalize(item: _t_): _t_;
  protected _normalize(item: _t_[]): _t_[];
  protected _normalize(item: _t_ | _t_[]): _t_ | _t_[] {
    return item;
  }
}

export type http_method = 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE' | string;