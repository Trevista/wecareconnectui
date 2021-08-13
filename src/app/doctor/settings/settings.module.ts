import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AngularTagsInputModule } from '@iomechs/angular-tags-input';
import { NgSelect2Module } from 'ng-select2';
import { GetNameFromUrlPipe } from 'src/app/pipes/get-name-from-url.pipe';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [SettingsComponent, GetNameFromUrlPipe],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NgxDropzoneModule,
    AngularTagsInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelect2Module,
    MatRadioModule  ],
  providers: [DatePipe]
})
export class SettingsModule { }
