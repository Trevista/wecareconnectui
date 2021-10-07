import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxSpinnerModule } from "ngx-spinner";
import { PrescriptionDetailsComponent } from './prescription-details.component';
import { PrescriptionDetailsRoutingModule } from './prescription-details-routing.module';
import { PluckPipe } from '../pipes/pluck.pipe';


@NgModule({
  declarations: [PrescriptionDetailsComponent, PluckPipe],
  imports: [
    CommonModule,
    FormsModule,
    PrescriptionDetailsRoutingModule,
    NgxSpinnerModule
  ],
  exports:[PrescriptionDetailsComponent]
})
export class PrescriptionDetailsModule { }
