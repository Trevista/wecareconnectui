import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduletimingRoutingModule } from './scheduletiming-routing.module';
import { ScheduletimingComponent } from './scheduletiming.component';
import { NgSelect2Module } from 'ng-select2';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ScheduletimingComponent],
  imports: [NgSelect2Module, CommonModule, ScheduletimingRoutingModule, NgxMaterialTimepickerModule, ReactiveFormsModule, FormsModule],
})
export class ScheduletimingModule {}
