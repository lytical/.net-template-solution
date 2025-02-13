import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { util_filter_boolean_pipe } from './filter-boolean.pipe';

const exports = [
  util_filter_boolean_pipe
];

@NgModule({
  declarations: [...exports],
  exports,
  imports: [
    CommonModule
  ],
})
export class util_module { }
