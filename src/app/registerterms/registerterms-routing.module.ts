import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegistertermsComponent } from './registerterms';

const routes: Routes = [
	
  {
    path: '',
    component: RegistertermsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistertermsRoutingModule { }
