import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
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
    })
   this.getweekdaytimeslots();
    
  }
  onSubmit() {
    console.log(this.scheduletimingForm);
    if (this.scheduletimingForm.valid) {
      const scheduletiming = [{
        ...this.scheduletimingForm.value,
        weekDay: parseInt(this.weekvalue)
       
        
      }];
     // console.log(scheduletiming);

      this.userService.Addtimeslots(scheduletiming).subscribe(x => {
        console.log(x);
        this.toastr.success('', 'Profile Updated Succesfully');
      }, (error) => console.log(error));
      //if (scheduletiming.id > 0) {
      //  this.userService.Addtimeslots(scheduletiming).subscribe(x => {
      //    this.toastr.success('', 'Profile Updated Succesfully');
      //  }, (error) => this.toastr.error(error.title, 'Error Occured while updating Profile'));
      //} else {
      //  this.userService.Addtimeslots(scheduletiming).subscribe(x => {
      //    this.toastr.success('', 'Profile Updated Succesfully');
      //  }, (error) => this.toastr.error(error.title, 'Error Occured while saving Profile'));
      //}

    }
    else {
      this.toastr.error(this.scheduletimingForm.errors.toString(), 'Please Provide required details');
    }
  }

  getweekdaytimeslots() {
    this.userService.getTimeslot(this.auth.userValue.id).subscribe(x => {
      console.log(x);
      this.weekdaysappointmentSlots = x['appointmentSlots'];
      this.weekdayappointmentSlots = this.weekdaysappointmentSlots.filter(r => r.weekDay == 1);
    })
  }
  onchangeweek(value) {
    this.weekvalue = value;
    console.log(value);
  }
  selectchange(event) {
    console.log(event)
    this.weekvalue = event;
    if (this.weekvalue == 1) {
      this.weekdayappointmentSlots = this.weekdaysappointmentSlots.filter(r => r.weekDay == 1);
    }
    else if (this.weekvalue == 2) {
      this.weekdayappointmentSlots = this.weekdaysappointmentSlots.filter(r => r.weekDay == 2);
    }
    else if (this.weekvalue == 3) {
      this.weekdayappointmentSlots = this.weekdaysappointmentSlots.filter(r => r.weekDay == 3);
    }
    else if (this.weekvalue == 4) {
      this.weekdayappointmentSlots = this.weekdaysappointmentSlots.filter(r => r.weekDay == 4);
    }
    else if (this.weekvalue == 5) {
      this.weekdayappointmentSlots = this.weekdaysappointmentSlots.filter(r => r.weekDay == 5);
    }
    else if (this.weekvalue == 6) {
      this.weekdayappointmentSlots = this.weekdaysappointmentSlots.filter(r => r.weekDay == 6);
    }
    else if (this.weekvalue == 7) {
      this.weekdayappointmentSlots = this.weekdaysappointmentSlots.filter(r => r.weekDay == 7);
    }
    else {
      this.weekdayappointmentSlots = this.weekdaysappointmentSlots.filter(r => r.weekDay == 1);
    }
  }

}
