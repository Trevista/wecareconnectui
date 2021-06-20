import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent implements OnInit {

  prescription: any;
  appointmentId:number;
  appointment: any;
  isVideo:boolean;
  today:any;
  patient:any;

  constructor(public appointmentService: AppointmentService
    , private route: ActivatedRoute
    , private appoinmentService: AppointmentService) { }

  ngOnInit(): void {
    this.prescription = this.appoinmentService.prescription;
  }

}
