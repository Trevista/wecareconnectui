import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(public appointmentService: AppointmentService) { }

  data: any;

  ngOnInit(): void {
    this.data = this.appointmentService.appointmentData;
  }

}
