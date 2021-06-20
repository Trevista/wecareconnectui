import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.css']
})
export class OtpLoginComponent implements OnInit, OnDestroy {
  phoneNumber:string;
  enableEnterOTP:boolean = false;
  interval:any;
  timeLeft: number;
  otp: string;

  constructor(private spinner: NgxSpinnerService) { }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
  }
  getOTP(){
    console.log(this.phoneNumber);
    this.spinner.show();
    setTimeout(() => {
      this.enableEnterOTP = true;
      this.spinner.hide();
      this.startTimer();
    }, 2000);
  }

  startTimer() {
    this.timeLeft = 30;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
      }
    },1000)
  }

  verifyOTP(){
    console.log(this.otp);
    this.enableEnterOTP = false;
    clearInterval(this.interval);
  }

  resendOTP(){
    this.startTimer();
  }
}

//Service: Send phone number and get otp
//Service: Verify OTP and success message, navigation.
//                        failure message, content.
