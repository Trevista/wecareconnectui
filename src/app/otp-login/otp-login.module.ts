import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxSpinnerModule } from "ngx-spinner";
import { OtpLoginComponent } from './otp-login.component';
import { OtpLoginRoutingModule } from './otp-login-routing.module';


@NgModule({
  declarations: [OtpLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    OtpLoginRoutingModule,
    NgxSpinnerModule
  ]
})
export class OtpLoginModule { }
