import { Component, OnInit } from '@angular/core';
import {CommonServiceService  } from './../../common-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appointments: any = [];
  patients ;

  constructor(public commonService: CommonServiceService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.getPatients();
    this.getAppointmentsbypatientid();
  }

  //getAppointments() {
  //  this.commonService.getAppointments()
  //    .subscribe(res=>{
  //      this.appointments = res;
  //      let scope = this;
  //      this.appointments.forEach(index=>{
  //        let filter = scope.patients.filter(a=>a.key === index.patient_key);
  //        if(filter.length != 0) {
  //          index['patients'] = filter[0];
  //        }
  //      })
       
  //    })
  //}
  getAppointmentsbypatientid() {
    let id = this.auth.userValue.id;
    this.commonService.getAppointmentsbypatientid(37)
      .subscribe(res => {
        this.appointments = res['appointments'];
        console.log(res);
        //let scope = this;
        //this.appointments.forEach(index => {
        //  let filter = scope.patients.filter(a => a.key === index.patient_key);
        //  if (filter.length != 0) {
        //    index['patients'] = filter[0];
        //  }
        //})

      })
  }

  getPatients() {
    this.commonService.getpatients()
    .subscribe(res=>{
      this.patients = res;
    })
  }


 
}
