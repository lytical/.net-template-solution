export interface api_error_t {
  message?: string | null;
  stack?: string | null;
}

export interface api_response_t<T> {
  value?: T | null;
  errors?: api_error_t[] | null
}

export type datetime = number | Date | string;

export interface api_pagination_rps_t<_t_> {
  contents?: _t_[],
  count?: number;
}

export interface api_patch_t<_t_> {
  push?: any;
  pull?: any;
  set?: _t_;
  unset?: _t_;
}

export interface document_t {
  _id?: string;
}

export interface named_document_t extends document_t {
  name?: string;
  description?: string;
}