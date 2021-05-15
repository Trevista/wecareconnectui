import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgxSpinnerModule } from "ngx-spinner";

import { ModalModule } from 'ngx-bootstrap/modal';
import { RegistertermsComponent } from './registerterms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RegistertermsRoutingModule } from './registerterms-routing.module';

@NgModule({
  declarations: [RegistertermsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistertermsRoutingModule,
    NgxSpinnerModule, ModalModule.forRoot(), PdfViewerModule
  ]
})
export class RegistertermsModule { }
