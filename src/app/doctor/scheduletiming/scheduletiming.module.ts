import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduletimingRoutingModule } from './scheduletiming-routing.module';
import { ScheduletimingComponent } from './scheduletiming.component';
import { NgSelect2Module } from 'ng-select2';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SlotweekdayPipe } from 'src/app/pipes/slotweekday.pipe';


@NgModule({
  declarations: [ScheduletimingComponent, SlotweekdayPipe],
  imports: [NgSelect2Module, CommonModule, ScheduletimingRoutingModule, NgxMaterialTimepickerModule, ReactiveFormsModule, FormsModule],
})
export class ScheduletimingModule {}
