import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import {CommonServiceService  } from './../../common-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
	list : any = []
  modalRef: BsModalRef;
  patientId;
  appointments : any = [];
  patients :  any = [];
  appointmentId;
  constructor(public commonService: CommonServiceService, private modalService: BsModalService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    //this.patients = [{ name: "John", date: " 14 Nov 2019, 10.00 AM", address: "Hyderabad", email: "john@wecare.com", phone: "999999999" }, { name: "John", date: " 14 Nov 2019, 10.00 AM", address: "Hyderabad", email: "john@wecare.com", phone: "999999999" }]
      this.getPatients();
      this.getAppointments();
		  this.list = this.commonService.getJSON();
		  this.list = this.list.filter(a=>a.status === 0);
  }

  openModal(template: TemplateRef<any>,appointment) {
    this.appointmentId = appointment;
    console.log(appointment);
    this.modalRef = this.modalService.show(template,{class: 'modal-sm modal-dialog-centered'});
    
  }

  confirm(value) {
    delete this.appointmentId['patients']
    let data = {
      ...this.appointmentId
    }
    console.log(data);
    data['appointmentStatus'] = 'accept';
    this.commonService.updateAppointment(data,data.id)
      .subscribe(res => {
        console.log(res);
        this.modalRef.hide();
        this.appointments = this.appointments.filter(a=>a.id != data.id);
        this.getPatients();
        this.getAppointments();
      });
   
  }

  btnColor() {
    document.getElementById('btn-yes').style.backgroundColor = "#09e5ab";
    document.getElementById('btn-yes').style.border = "1px solid #09e5ab";
    document.getElementById('btn-yes').style.color = "#fff";

    document.getElementById('btn-no').style.backgroundColor = "#fff";
    document.getElementById('btn-no').style.border = "1px solid #fff";
    document.getElementById('btn-no').style.color = "#000";
  }

  btnColorNo() {
    document.getElementById('btn-no').style.backgroundColor = "#09e5ab";
    document.getElementById('btn-no').style.border = "1px solid #09e5ab";
    document.getElementById('btn-no').style.color = "#fff";

    document.getElementById('btn-yes').style.backgroundColor = "#fff";
    document.getElementById('btn-yes').style.border = "1px solid #fff";
    document.getElementById('btn-yes').style.color = "#000";
  }

  decline() {
    delete this.appointmentId['patients']
    let data = {
      ...this.appointmentId
    }
    data['status'] = 'decline';
    this.commonService.updateAppointment(data,data.id)
      .subscribe(res=>{
        this.modalRef.hide();
        this.appointments = this.appointments.filter(a=>a.id != data.id);
        this.getPatients();
        this.getAppointments();
      })
  }

  getAppointments() {
    console.log("IN Appointments..");
    this.commonService.getAppointments()
      .subscribe(res=>{
        this.appointments = res;
        console.log(this.appointments);
        this.appointments = this.appointments.filter(x => x.doctorId == this.auth.userValue.id);
       // let scope = this;
       // this.appointments.forEach(index=>{
       //   let filter = scope.patients.filter(a=>a.key === index.patient_key);
       //   if(filter.length != 0) {
       //     index['patients'] = filter[0];
       //   }
       // })
       //let result =  this.appointments = this.appointments.filter(a=>a.status === 'active');
       //if(result){
       //  console.log("Appoinment Result: " , result);
       //}
       //else{
       //  console.log("NO Appointments FOUND ON SERVER");
       //}
      })
  }

  getPatients() {
    //console.log("IN Patients...");
    let id = this.auth.userValue.id;
    this.commonService.getAppointmentsbyDoctorid(id)
      .subscribe(res => {
        console.log(res);
        this.patients = res['patientAppointments'];
    })
  }

 
}
