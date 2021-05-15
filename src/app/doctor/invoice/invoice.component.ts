import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { CommonServiceService } from './../../common-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoices: any = [];
  constructor(public commonService: CommonServiceService,
              public appointment: AppointmentService, public auth: AuthenticationService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.appointment.getInvoicesByDoctorId(this.auth.userValue.id).subscribe(
      x => {
        this.invoices = x.invoiceList;
        console.log(x);
      }
    );
  }

}
