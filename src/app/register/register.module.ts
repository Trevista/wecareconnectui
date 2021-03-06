import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NgxSpinnerModule } from "ngx-spinner";

import { ModalModule } from 'ngx-bootstrap/modal';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    NgxSpinnerModule, ModalModule.forRoot(), PdfViewerModule, MatCheckboxModule
  ]
})
export class RegisterModule { }
