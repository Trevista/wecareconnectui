import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from '../common-service.service';

import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { Register } from '../models/register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";  

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registrationForm: FormGroup;
  public submitted = false;
  modalRef: BsModalRef;
  isPatient = false;
  doctors: any = [];
  patients: any = [];
  reg_type = 'Patient Register';
  doc_patient = 'Are you a Doctor?';
  hasOTP:boolean = false;
  @ViewChild('Viewtemplate', { read: TemplateRef }) showPopUp:TemplateRef<any>;
  id: number;
  OTP: number;
  isAggreedConditions:boolean = false;
  interval:any;
  timeLeft: number;

  constructor(
    private toastr: ToastrService,
    public commonService: CommonServiceService,
    public authService: AuthenticationService,
    public router: Router,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService, private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.isPatient = false;
    this.registrationForm = this.formBuilder.group({
      title : [''],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : [''],
      password : ['', Validators.required],
      confirmPassword : ['', Validators.required],
      role : [3, Validators.required],
      acceptTerms : [true, Validators.required],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
      otpId : [''],
      otp : [''],
      });
    this.getpatients();
    this.getDoctors();
  }
  checkType(event) {
    this.isPatient = event.target.checked ? true : false;
  }
  openModal(template: TemplateRef<any>) {
   
    this.modalRef = this.modalService.show(template, { class: 'modal-xl modal-dialog-centered' });

  }
  openpdfviewer(doc) {
   
    this.commonService.doc = doc;
    console.log(doc);
      
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
      this.spinner.show();
      console.log("Reg form is valid , trasnfering data to service layer..." , this.registrationForm.value)
      this.registrationForm.controls.otpId.setValue(this.id);
      this.registrationForm.controls.otp.setValue(this.OTP);
      let result = this.authService.register(this.registrationForm.value).subscribe((res) => {
        console.log("Account Result: ", result);
        this.spinner.hide();
        this.toastr.success('', 'Register successfully!');
        this.router.navigate(['/login-page']);
      },
      (error)=> {
        this.spinner.hide();
        if(error.error?.message.indexOf("Account already") > -1 ){
          this.modalRef = this.modalService.show(this.showPopUp, {class: 'modal-md modal-dialog-centered'});
        } 
        else{
          this.toastr.error('', error.error?.message);
        }
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

  getOTP(){
    this.spinner.show();
    this.authService.getOTPWithNewNumber(this.registrationForm.controls.phoneNumber.value).subscribe(data => {
      this.spinner.hide();
      this.hasOTP = true;
      this.id = data;
      this.startTimer();
    },(error) => {this.spinner.hide();})
  }

  startTimer() {
    this.timeLeft = 120;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.hasOTP = false;
        clearInterval(this.interval);
      }
    },1000);
  }
}
