import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from '../common-service.service';

import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { Register } from '../models/register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registrationForm: FormGroup;
  public submitted = false;

  isPatient = true;
  doctors: any = [];
  patients: any = [];
  reg_type = 'Patient Register';
  doc_patient = 'Are you a Doctor?';
  constructor(
    private toastr: ToastrService,
    public commonService: CommonServiceService,
    public authService: AuthenticationService,
    public router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      title : [''],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      confirmPassword : ['', Validators.required],
      role : [3, Validators.required],
      acceptTerms : [true, Validators.required],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
      });
    this.getpatients();
    this.getDoctors();
  }

  changeRegType() {
    if (this.reg_type === 'Doctor Register') {
      this.reg_type = 'Patient Register';
      this.doc_patient = 'Are you a Doctor?';
      this.isPatient = true;
      this.registrationForm.get('role').patchValue(3);
    } else {
      this.reg_type = 'Doctor Register';
      this.doc_patient = 'Not a Doctor?';
      this.isPatient = false;
      this.registrationForm.get('role').patchValue(2);
    }
  }

  signup() {
    console.log("Clicked signup form...");
    if (this.registrationForm.invalid) {
      this.toastr.error('', 'Please enter mandatory field!');
    }
    else {
      console.log("Reg form is valid , trasnfering data to service layer..." , this.registrationForm.value)
      let result = this.authService.register(this.registrationForm.value).subscribe((res) => {
        console.log("Account Result: ", result);
        this.toastr.success('', 'Register successfully!');
        this.router.navigate(['/login-page']);
      });
    }
  }

  getDoctors() {
    this.commonService.getDoctors().subscribe((res) => {
      this.doctors = res;
    });
  }

  getpatients() {
    this.commonService.getpatients().subscribe((res) => {
      this.patients = res;
    });
  }
}
