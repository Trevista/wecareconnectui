import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';
import { StatePipe } from 'src/app/pipes/states/state.pipe';

@NgModule({
  declarations: [SettingsComponent, StatePipe],
  imports: [
    CommonModule,
    SettingsRoutingModule, FormsModule,
    ReactiveFormsModule,
    NgSelect2Module
  ],
  providers: [DatePipe]
})
export class SettingsModule { }
