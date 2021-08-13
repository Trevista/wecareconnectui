import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    NgxSpinnerModule,
    MatCheckboxModule
  ]
})
export class LoginModule { }
