import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitialsFormComponent } from './components/initials-form/initials-form.component';
import { AvatarsFormComponent } from './components/avatars-form/avatars-form.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';

const routes: Routes = [
  {
    path: 'avatars',
    component: AvatarsFormComponent
  },
  {
    path: 'initials',
    component: InitialsFormComponent
  },
  {
    path:'custom',
    component: CustomFormComponent
  },
  {
    path:'**',
    redirectTo: 'initials'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
