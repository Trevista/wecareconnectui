import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentSlot } from 'src/app/models/appointment-slot';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserService } from 'src/app/services/user.service';
import { CommonServiceService } from './../../common-service.service';
import * as moment from 'moment';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  doctorId;
  doctorDetails;
  userDetails;
  public daterange: any = {};
  startDt = new Date();
  appointmentSlots: Appointment[];
  startDate = this._datePipe.transform(new Date(), 'YYYY-MM-dd');
  endDate = this._datePipe.transform(new Date(this.startDt.setDate(this.startDt.getDate() + 6)), 'YYYY-MM-dd');
  dateMap;
  dateRange = [];
  selection = new Date();
  filteredSlots = [];

  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    endDate: this.endDate,
  };

  public selectedDate(value: any, datepicker?: any) {
    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

  constructor(
    private route: ActivatedRoute,
    public commonService: CommonServiceService,
    public appointmentService: AppointmentService,
    public userService: UserService,
    public authService: AuthenticationService,
    private _datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.queryParams.id) {
      this.doctorId = this.route.snapshot.queryParams.id;
    } else {
      this.doctorId = 1;
    }

    this.getDoctorAppointmentSlots();
    this.getDoctorsDetails();
    this.patientDetails();
  }

  applyDate(event){
    this.startDate = this._datePipe.transform(event.picker.startDate, 'YYYY-MM-dd') ;
    this.endDate = this._datePipe.transform(event.picker.endDate, 'YYYY-MM-dd');
    this.getDoctorAppointmentSlots();
  }

  clickArrow(i: number){
    const dt1 = moment(this.startDate).add(i, 'day');
    const dt2 = moment(this.endDate).add(i, 'day');
    this.startDate = this._datePipe.transform(dt1.toDate(), 'YYYY-MM-dd');
    this.endDate = this._datePipe.transform(dt2.toDate(), 'YYYY-MM-dd');
    this.getDoctorAppointmentSlots();
  }

  getDoctorAppointmentSlots(){
    this.appointmentService.getAppointmentSlotsAvailableByDoctorId(this.doctorId, this.startDate, this.endDate)
                              .subscribe(x => {
                                this.appointmentSlots = x.patientAppointments;
                                console.log(this.appointmentSlots);
                                this.dateRange = [];
                                x.dateRanges.forEach(y => {
                                  this.dateRange.push({
                                    formatted: this._datePipe.transform(y, 'dd MMM YYYY'),
                                    actual: y,
                                    day : this._datePipe.transform(y, 'EEE')
                                  });
                                });
                              });
  }

  getData(s){
    return this.appointmentSlots.filter(x => x.dateMap === s.actual);
  }

  getDoctorsDetails() {
    this.userService.getProfile(this.doctorId).subscribe((res) => {
      this.doctorDetails = res;
    });
  }

  get getCheckedAppintment() {
    return this.appointmentSlots?.filter(x => x.checked)[0]?.appointmentDate;
  }

  selectDayToProceed(event, appointment){
    const elements = document.getElementsByClassName('timing');
    for (let i = 0, len = elements.length || 0; i < len; i = i + 1 || 0) {
      elements[i].classList.remove('selected');
    }

    if(event.target.tagName == "SPAN"){
      event.target.parentNode.classList.add('selected');
    }
    else{
      event.target.classList.add('selected');
    }

    this.appointmentSlots.forEach(x => x.checked = false);
    appointment.checked = true;
  }

  patientDetails() {
  const  userId = this.authService.userValue
    if (userId) {
      this.commonService.getPatientDetails(Number(userId.id)).subscribe((res) => {
        this.userDetails = res;
      });
    }
  }
}

