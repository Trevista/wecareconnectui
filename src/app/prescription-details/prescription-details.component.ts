import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import { UserService } from '../services/user.service';

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
  sign:any;

  constructor(public appointmentService: AppointmentService
    , private route: ActivatedRoute
    , private appoinmentService: AppointmentService
    , private userService: UserService) { }

  ngOnInit(): void {
    this.prescriptions = this.appoinmentService.prescriptions;
    this.getPrescriptionDetails();
  }

  getPrescriptionDetails(){
    if(this.prescriptions && this.prescriptions.length > 0){
      this.prescription = this.prescriptions[0];
      this.userService.getProfile(this.prescription.appointment.doctorId).subscribe(x => {
        this.sign = x.signatureAttachUrl;
        this.appointmentService.getAppointmentNotes(this.prescription.appointmentId).subscribe(data => {
          this.prescriptionNotes = data;
        });
      });
      
    }
  }

}
