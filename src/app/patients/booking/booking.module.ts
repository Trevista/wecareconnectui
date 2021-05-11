import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Daterangepicker } from 'ng2-daterangepicker';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    NgbModule,
    Daterangepicker
  ],
  providers:[DatePipe]
})
export class BookingModule { }
