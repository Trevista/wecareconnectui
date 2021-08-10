import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent implements OnInit {

  prescriptions: any[] = [];
  prescription: any;
  appointmentId:number;
  appointment: any;
  isVideo:boolean;
  today:any;
  patient:any;
  isPrintOption: boolean = false;
  prescriptionNotes: any;

  constructor(public appointmentService: AppointmentService
    , private route: ActivatedRoute
    , private appoinmentService: AppointmentService) { }

  ngOnInit(): void {
    this.prescriptions = this.appoinmentService.prescriptions;
    if(this.prescriptions && this.prescriptions.length > 0){
      this.prescription = this.prescriptions[0];
      this.appointmentService.getAppointmentNotes(this.prescription.appointmentId).subscribe(data => {
        this.prescriptionNotes = data;
      });
    }
  }

}
