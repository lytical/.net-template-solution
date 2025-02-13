import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { page_home_component } from './home/home.component';
import { page_header_component } from './header/header.component';
import { util_module } from '../util/util.module';
import { page_template_component } from './template/template.component';

@NgModule({
  declarations: [
    page_home_component,
    page_header_component,
    page_template_component
  ],
  exports: [page_header_component],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    util_module
  ]
})
export class page_module { }
