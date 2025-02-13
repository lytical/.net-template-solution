import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modal_directive } from './modal.directive';

const exports = [
  modal_directive
];

@NgModule({
  declarations: [...exports],
  exports,
  imports: [
    CommonModule
  ],
  providers: [
  ]
})
export class directive_module { }
