import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {CommonServiceService  } from './../../common-service.service';

@Component({
  selector: 'app-mypatients',
  templateUrl: './mypatients.component.html',
  styleUrls: ['./mypatients.component.css']
})
export class MypatientsComponent implements OnInit {

  appointments: any = [];
  patients: any = [];

  constructor(public commonService: CommonServiceService,
              public appointmentService: AppointmentService, public auth: AuthenticationService) { }

  ngOnInit(): void {
    this.patients = [];

    this.getPatients();
    this.getAppointments();

  }

  getAppointments() {
    this.commonService.getAppointments()
      .subscribe(res => {
        this.appointments = res;
        const scope = this;
        this.appointments.forEach(index => {
          const filter = scope.patients.filter(a => a.key === index.patient_key);
          if (filter.length != 0) {
            index.patients = filter[0];
          }
        });
        this.appointments = this.appointments.filter(a => a.status === 'accept');
      });
  }

  getPatients() {
    this.appointmentService.getPatientsUnderDoctor(this.auth.userValue.id)
    .subscribe(res => {
      console.log(res);
      this.patients = res.patients;
    });
  }

}
