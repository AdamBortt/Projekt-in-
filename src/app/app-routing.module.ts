import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitialsFormComponent } from './components/initials-form/initials-form.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';

const routes: Routes = [
  {
    path: 'template',
    component: InitialsFormComponent
  },
  {
    path:'custom',
    component: CustomFormComponent
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
