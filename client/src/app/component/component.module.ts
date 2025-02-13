import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loading_component } from './loading/loading.component';

const exports = [
  loading_component
];

@NgModule({
  declarations: [
    ...exports
  ],
  exports,
  imports: [
    CommonModule
  ]
})
export class component_module { }
