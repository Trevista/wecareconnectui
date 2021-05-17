import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import {CommonServiceService  } from './../../common-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
	list: any = [];
  modalRef: BsModalRef;
  patientId;
  appointments: any = [];
  patients: any = [];
  appointmentId;
  selectedAppointment;
  constructor(public commonService: CommonServiceService,
              private modalService: BsModalService, private auth: AuthenticationService,
              private appointmentService: AppointmentService,
              private toaster: ToastrService) { }

  ngOnInit(): void {
    // this.patients = [{ name: "John", date: " 14 Nov 2019, 10.00 AM", address: "Hyderabad", email: "john@wecare.com", phone: "999999999" }, { name: "John", date: " 14 Nov 2019, 10.00 AM", address: "Hyderabad", email: "john@wecare.com", phone: "999999999" }]
    this.getAppointments();
    this.getPatients();
		  this.list = this.commonService.getJSON();
		  this.list = this.list.filter(a => a.status === 0);
  }

  openModal(template: TemplateRef<any>, appointment) {
    this.appointmentId = appointment;
    this.selectedAppointment = appointment;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-dialog-centered'});
  }

  getAcceptCheck(appointment){
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return moment(appointment.appointmentDate) >= moment(today) && appointment.status === 1;
  }

  Accept(value) {
    this.appointmentService.updateAppointmentStatus(this.selectedAppointment.id, 2, null)
    .subscribe(x => {
      this.toaster.success('', 'Updated successfully!');
      this.modalRef.hide();
      this.getAppointments();
      this.getPatients();
    });
}

confirm(value) {
  this.appointmentService.updateAppointmentStatus(this.selectedAppointment.id, 3, null)
  .subscribe(x => {
    this.toaster.success('', 'Cancelled successfully!');
    this.modalRef.hide();
    this.getAppointments();
    this.getPatients();
  });
}


  btnColor() {
    document.getElementById('btn-yes').style.backgroundColor = '#09e5ab';
    document.getElementById('btn-yes').style.border = '1px solid #09e5ab';
    document.getElementById('btn-yes').style.color = '#fff';

    document.getElementById('btn-no').style.backgroundColor = '#fff';
    document.getElementById('btn-no').style.border = '1px solid #fff';
    document.getElementById('btn-no').style.color = '#000';
  }

  btnColorNo() {
    document.getElementById('btn-no').style.backgroundColor = '#09e5ab';
    document.getElementById('btn-no').style.border = '1px solid #09e5ab';
    document.getElementById('btn-no').style.color = '#fff';

    document.getElementById('btn-yes').style.backgroundColor = '#fff';
    document.getElementById('btn-yes').style.border = '1px solid #fff';
    document.getElementById('btn-yes').style.color = '#000';
  }

  decline() {
    delete this.appointmentId.patients;
    const data = {
      ...this.appointmentId
    };
    data.status = 'decline';
    this.commonService.updateAppointment(data, data.id)
      .subscribe(res => {
        this.modalRef.hide();
        this.appointments = this.appointments.filter(a => a.id != data.id);
        this.getAppointments();
        this.getPatients();
      });
  }

  getAppointments() {
    this.appointmentService.getAppointmentsByDoctorId(this.auth.userValue.id)
      .subscribe(res => {
        this.appointments = res.patientAppointments;
      });
  }

  getPatients() {
    const id = this.auth.userValue.id;
    this.appointmentService.getPatientsUnderDoctor(id)
      .subscribe(res => {
        this.patients = res.patientAppointments;
    });
  }


}
