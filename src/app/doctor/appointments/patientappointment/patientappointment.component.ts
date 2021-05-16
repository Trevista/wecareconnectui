import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-patientappointment',
  templateUrl: './patientappointment.component.html',
  styleUrls: ['./patientappointment.component.css']
})
export class PatientappointmentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) { }

  appointment: any;
  notes: any;


  ngOnInit(): void {
    const appointmentId = this.route.snapshot.queryParams.id;
    this.appointmentService.getAppointmentById(appointmentId).subscribe(x => {
      this.appointment = x;
    });
  }
}
