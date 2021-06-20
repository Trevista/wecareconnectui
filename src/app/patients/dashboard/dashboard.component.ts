import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {CommonServiceService  } from './../../common-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appointments;
  patients;
  user;
  invoices = [];
  prescriptions = [];
  medicalRecords = [];
  today = new Date();

  constructor(public commonService: CommonServiceService,
              public appointmentService: AppointmentService, 
              public authService: AuthenticationService,
              public router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.userValue;
    //this.getPatients();
    this.getAppointments();
    this.getInvoices();
    this.getPrescriptions();
  }


  getPrescriptions() {
   this.appointmentService.getAppointmentPrescriptionByPatientId(this.user?.id).subscribe(
     x => {
       this.prescriptions = x;
      }
   );
  }


  getInvoices() {
    this.appointmentService.getInvoicesByPatientEmail(this.authService.userValue.email).subscribe(x => {
      this.invoices = x.invoiceList;
    });
  }

  getStatus(status){
    let statusDetail = '#N/A';
    switch (status) {
      case 0:
        statusDetail = 'Not Created';
        break;
      case 1:
        statusDetail = 'Pending';
        break;
      case 2:
        statusDetail = 'Confirmed';
        break;
      case 3:
        statusDetail = 'Cancelled';
        break;
      case 4:
        statusDetail = 'Rescheduled';
        break;
      default:
        break;
    }
    return statusDetail;
  }

  getAppointments() {
    this.appointmentService.getAppointmentsByPatientEmail(this.user.email).subscribe(
      x => {
        this.appointments = x.appointments;
        console.log(x.appointments);
      },
      error => {

      }
    );
  }

  getPatients() {
    this.commonService.getpatients()
    .subscribe(res => {
      this.patients = res;
    });
  }

  getFutureEvent(appointment){
    const today = new Date();
    const now = moment(today.setMinutes(today.getMinutes() - 12));
    const appointmentDate = moment(appointment?.appointmentDate);
    return appointmentDate >= now;
  }

  prescriptionDetails(prescription:any){
    this.appointmentService.prescription = prescription;
    this.router.navigate(['/prescription-details']);
  }
}
