import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { page_home_component } from './page/home/home.component';
import { page_module } from './page/page.module';
import { page_template_component } from './page/template/template.component';

const routes: Routes = [
  { path: '', component: page_home_component, pathMatch: 'full', title: 'Lytical Client Template' },
  { path: 'template', component: page_template_component, pathMatch: 'full', title: 'Lytical Client Template' }
];

@NgModule({
  imports: [
    page_module,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class app_route_module { }
