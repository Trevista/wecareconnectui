import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PatientappointmentComponent } from './patientappointment/patientappointment.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NotesComponent } from './notes/notes.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { NgSelect2Module } from 'ng-select2';

@NgModule({
  declarations: [AppointmentsComponent, PatientappointmentComponent, NotesComponent, PrescriptionsComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    NgSelect2Module,
    ModalModule.forRoot()
  ]
})
export class AppointmentsModule { }
