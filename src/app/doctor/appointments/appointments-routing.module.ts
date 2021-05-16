import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsComponent } from  './appointments.component';
import { PatientappointmentComponent } from './patientappointment/patientappointment.component';

const routes: Routes = [
  {
    path : '',
    component : AppointmentsComponent
  },
  {
    path: 'view',
    component : PatientappointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
