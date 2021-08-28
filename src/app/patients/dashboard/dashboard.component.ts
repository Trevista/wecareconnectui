import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { PrescriptionDetailsComponent } from 'src/app/prescription-details/prescription-details.component';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {CommonServiceService  } from './../../common-service.service';
declare var $:any;

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
  prescriptionsByAppoinmentId = [];
  medicalRecords = [];
  today = new Date();
  @ViewChild(PrescriptionDetailsComponent) prescriptionDetailsComponent: PrescriptionDetailsComponent;

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
       let appoinmentIds:any[] = [];
       this.prescriptions.forEach(p => {
         if(appoinmentIds.indexOf(p.appointmentId) == -1){
          appoinmentIds.push(p.appointmentId);
          this.prescriptionsByAppoinmentId.push(p);
         }
       })
      }
   );
  }


  getInvoices() {
    this.appointmentService.getInvoicesByPatientId(this.user?.id).subscribe(x => {
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
    this.appointmentService.getAppointmentsByPatientId(this.user?.id).subscribe(
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
    this.appointmentService.prescriptions = this.prescriptions.filter(p => prescription.appointmentId == p.appointmentId);
    this.router.navigate(['/prescription-details']);
  }

  printPrescriptionDetails(prescription){
    this.prescriptionDetailsComponent.prescriptions = this.prescriptions.filter(p => prescription.appointmentId == p.appointmentId);
    this.prescriptionDetailsComponent.isPrintOption = true;
    $("#print_patient_prescription").printThis({debug: true, importCSS: true });
  }
}
