import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService) { }
  appointmentId;
  appointment;
  doctor;
  today = new Date();
  patient;
  isVideo;

  ngOnInit(): void {
    if (this.route.snapshot.queryParams.id) {
      this.appointmentId = this.route.snapshot.queryParams.id;
    } else {
      this.appointmentId = 0;
    }

    this.invoiceService.getInvoiceByAppointmentId(this.appointmentId).subscribe(x => {
      if (x.responseStatus === true){
        this.appointment = x.invoiceList[0];
        this.doctor = this.appointment.doctor.profile;
        this.patient = this.appointment.patient.profile;
        console.log(this.appointment);
      }
      else{
        this.appointment = null;
      }
    }, (error) => {
      this.appointment = null;
    });
  }

}
