import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import {WeekDay} from 'src/app/common/constants/weekday';
import { AppointmentSlot, TimeSlot } from 'src/app/models/appointment-slot';
declare var $: any;

@Component({
  selector: 'app-scheduletiming',
  templateUrl: './scheduletiming.component.html',
  styleUrls: ['./scheduletiming.component.css']
})
export class ScheduletimingComponent implements OnInit {
    weekvalue: any;
    weekdaysappointmentSlots: any;
    weekdayappointmentSlots: any;
    weekDay = WeekDay.WeekDays;
    weekName: any;

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private toastr: ToastrService,
              private userService: UserService) { }
  scheduletimingForm: FormGroup;
  ngOnInit(): void {
    this.scheduletimingForm = this.fb.group({
      id: [0, Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
     // weekDay: [null, Validators.required],
      doctorId: [this.auth.userValue.id, [Validators.required]],
    });

    this.getweekdaytimeslots();
  }

  onSubmit() {
    console.log(this.scheduletimingForm);
    if (this.scheduletimingForm.valid) {
      const scheduletiming = [{
        ...this.scheduletimingForm.value,
        weekDay: parseInt(this.weekvalue, 10)
      }];
     // console.log(scheduletiming);

      this.userService.Addtimeslots(scheduletiming).subscribe(x => {
        this.toastr.success('', 'Appointment Slot Updated Succesfully');
        this.getweekdaytimeslots();
      }, (error) => this.toastr.error('Error Occured in updating Appointment Slot'));
    }
    else {
      this.toastr.error(this.scheduletimingForm.errors.toString(), 'Please Provide required details');
    }
  }

  getweekdaytimeslots() {
    this.userService.getTimeslot(this.auth.userValue.id).subscribe(x => {
      if (x.responseStatus === true){
        console.log(x);
        this.weekdaysappointmentSlots = x.appointmentSlots;
        //this.weekvalue = 1;
        this.weekvalue = this.weekvalue == null ? 1 : this.weekvalue;
        this.weekName = this.weekName == null ? 'Monday' : this.weekName;
        //this.weekName = 'Monday';
        this.scheduletimingForm.setValue({
          startTime: '',
          endTime: '',
          doctorId: this.auth.userValue.id,
          id: 0
        });
      }
    });
  }
  onchangeweek(value) {
    this.weekvalue = value;
    console.log(value);
  }

  selectchange(event) {
    console.log(event);
    this.weekvalue = event;
    this.weekName = this.weekDay.filter(x => x.id === parseInt(event, 10))[0].name;
   
  }

  deleteSchedule(appointmentSlot: AppointmentSlot){
    this.userService.deleteTimeslot(appointmentSlot.id).subscribe(x => {
      this.toastr.success('', 'Appointment Slot Deleted Succesfully');
      this.getweekdaytimeslots();
    }, (error) => {
      this.toastr.success('', 'Unable to Delete Appointment Slot');
    });
  }

}
