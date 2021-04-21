import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule, FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe]
})
export class SettingsModule { }
