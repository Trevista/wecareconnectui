import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from '../common-service.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.css']
})
export class OtpLoginComponent implements OnInit, OnDestroy {
  phoneNumber:string;
  enableEnterOTP:boolean;
  interval:any;
  timeLeft: number;
  otp: string;
  id: string;

  constructor(private spinner: NgxSpinnerService
    , private authService: AuthenticationService
    , private toastr: ToastrService
    , public commonService: CommonServiceService
    , public router: Router) { }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
  }
  getOTP(phoneNumber:any){
    if(isNaN(phoneNumber) || phoneNumber.length != 10){
      this.toastr.error('',"Invalid Phone number");
      return;
    }
    this.spinner.show();
    this.authService.getOTP(phoneNumber).subscribe(data => {
      this.spinner.hide();
      this.startTimer();
      this.enableEnterOTP = true;
      this.id = data;
    })
  }

  startTimer() {
    this.timeLeft = 90;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.id = '';
        clearInterval(this.interval);
      }
    },1000);
  }

  verifyOTP(){
    this.authService.authOTPLogin(this.id, this.otp).subscribe(x =>{
      this.toastr.success('', 'Login success!');
      const roleMessage = x.role + 'Login';
      this.commonService.nextmessage(roleMessage);
      if (x.role === 'Doctor'){
        this.router.navigate(['/doctor/dashboard']);
      }
      else if (x.role === 'User'){
        this.router.navigate(['/patients/dashboard']);
      }
      let doctorname: string = this.authService.userValue ?.firstName + ' ' + this.authService.userValue ?.lastName;
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', doctorname);
      clearInterval(this.interval);
    }, (error) => this.toastr.error('', 'Login failed!') && this.spinner.hide() && clearInterval(this.interval));
  }

  resendOTP(){
    this.getOTP(this.phoneNumber);
  }
}
