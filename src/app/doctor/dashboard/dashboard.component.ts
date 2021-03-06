import { Component, OnInit, TemplateRef, ViewEncapsulation ,  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit} from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import {CommonServiceService  } from './../../common-service.service';

import { ToastrService } from 'ngx-toastr';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import * as moment from 'moment';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private toastr: ToastrService,
              public commonService: CommonServiceService,
              private modalService: BsModalService,
              private modal: NgbModal,
              public appointmentService: AppointmentService,
              public authService: AuthenticationService) { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    // weekends: false, // initial value
    // dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' },
      { title: 'event 3', date: '2021-04-23' }
    ]
  };

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-eye"></i>',
      a11yLabel: 'View',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('viewed', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'Cardiology: Heart intense pulse Checkup',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'Cardiology: Surgery',
      color: colors.yellow,
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'Cardiology: Angiogram Analysis',
      color: colors.blue,
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'Cardiology: Electrodiogram (ECG)',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];

  activeDayIsOpen: boolean = true;

  list: any = []
  modalRef: BsModalRef;
  appointmentId;
  appointments: any = [];
  patients: any = [];
  patientsLength ;
  appointmentsLength;
  TotalPatientsLength ;
  activeTab = 'upcoming';
  selectedAppointment;
    totalPatientCount: any;
    todayPatientCount: any;
    todayAppointments: any = [];
    currentDate: Date;
    patientAppointments: any;
  userName: string;

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }


  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngOnInit(): void {
    this.getAppointments();
    this.getPatients();
    this.userName = localStorage.getItem('username');
    //this.getTotalpatientcount();
    //this.patientAppointments = [{ 'patients': { 'name': 'prasanth', 'key': '12345' }, 'appointment_time': '', 'type': 'New Patient', 'amount': '200'}]
  }

  ngAfterViewInit(): void {
    this.getAppointments();
  }

  search(activeTab){
    this.activeTab = activeTab;
  }

  result(activeTab){
    this.activeTab = activeTab;
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

  openModal(template: TemplateRef<any>, appointment) {
    this.appointmentId = appointment;
    this.selectedAppointment = appointment;
    console.log(this.selectedAppointment);
    this.modalRef = this.modalService.show(template, {class: 'modal-md modal-dialog-centered'});
  }

  Accept(value) {
      this.appointmentService.updateAppointmentStatus(this.selectedAppointment.id, 2, null)
      .subscribe(x => {
        this.toastr.success('', 'Updated successfully!');
        this.modalRef.hide();
        this.getAppointments();
        this.getPatients();
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

  getAppointmentMode(mode){
    switch (mode) {
      case 0:
        return 'Office';
      case 1:
        return 'Video';
      case 2:
        return 'Voice';
      default:
        return '';
    }
  }

  postpone() {
    // this.appointmentService.updateAppointmentStatus(this.selectedAppointment.id, 3, null)
    // .subscribe(x => {
    //   this.toastr.success('', 'Cancelled successfully!');
    //   this.modalRef.hide();
    //   this.getAppointments();
    // });
  }

  confirm(value) {
    this.appointmentService.updateAppointmentStatus(this.selectedAppointment.id, 3, null)
    .subscribe(x => {
      this.toastr.success('', 'Cancelled successfully!');
      this.modalRef.hide();
      this.getAppointments();
      this.getPatients();
    });
  }

  decline() {
  }


  getTotalpatientcount() {
    this.commonService.getDashboardlist()
      .subscribe(res => {
        this.totalPatientCount = res['totalPatients'];
        this.todayPatientCount = res['todayPatientsCount'];
        this.todayAppointments = res['appoinmentsCount'];
        this.patientAppointments = res['patientAppointments']
      })
    this.currentDate = new Date();
  }
  getAppointments() {
    this.appointmentService.getAppointmentsByDoctorId(this.authService.userValue.id)
    .subscribe(x => {
      this.appointments = x.patientAppointments;
      console.log( this.appointments);
      this.appointmentsLength = this.appointments?.length;
      const date = new Date();
      const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      this.todayAppointments = this.appointments.filter(y =>  moment(y.appointmentDate).isBetween(moment(today),
      moment(new Date()).add(1, 'day')));
    });
  }

  getPatients() {
    this.appointmentService.getPatientsUnderDoctor(this.authService.userValue.id)
    .subscribe(res => {
      this.patients = res.patients;
      this.TotalPatientsLength = this.patients?.length;
    });
  }

  cancel() {
    this.modalRef.hide();
  }

  openLink(url: string){
    this.cancel();
    window.open(url, "_blank")
  }
  // calendarPlugins = [dayGridPlugin];




}
