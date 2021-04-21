import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private auth: AuthenticationService, private toastr: ToastrService,
    private userService: UserService, private date: DatePipe) { }
  patientprofileForm: FormGroup;
  files: File[] = [];
  ngOnInit(): void {
    this.patientprofileForm = this.fb.group({
      id: [0, Validators.required],     
      email: [{ value: this.auth.userValue.email, disabled: true }, [Validators.required]],
      firstName: [this.auth.userValue.firstName, [Validators.required]],
      lastName: [this.auth.userValue.lastName, [Validators.required]],
      phoneNumber: ['', [Validators.required]],     
      dateOfBirth: ['', [Validators.required]],
      bloodGroup: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      country: ['', [Validators.required]],
     
    });
  }
  onSubmit() {
    console.log(this.patientprofileForm);
  }
}
