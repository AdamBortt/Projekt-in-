import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateViewComponent } from './components/template-view/template-view.component';
import { CustomViewComponent } from './components/custom-view/custom-view.component';

const routes: Routes = [
  {
    path: 'template',
    component: TemplateViewComponent
  },
  {
    path:'custom',
    component: CustomViewComponent
  },
  {
    path:'**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
