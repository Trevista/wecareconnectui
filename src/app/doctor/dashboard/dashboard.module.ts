import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppointmentdatePipe } from 'src/app/pipes/appointments/appointmentdate.pipe';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin

]);



@NgModule({
  declarations: [DashboardComponent, AppointmentdatePipe],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FullCalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
export class DashboardModule { }
