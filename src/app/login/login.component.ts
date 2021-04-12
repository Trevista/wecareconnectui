import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from '../common-service.service';

import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isPatient = false;
  doctors: any = [];
  patients: any = [];
  username = '';
  password = '';
  constructor(
    public router: Router,
    public commonService: CommonServiceService,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {
    this.username = '';
    this.password = '';
    this.doctors = [];
    this.patients = [];
  }

  ngOnInit(): void {
    this.getpatients();
    this.getDoctors();
  }

  checkType(event) {
    this.isPatient = event.target.checked ? true : false;
  }

  login(name, password) {
    const params = {
      email: name,
      password
    };
    this.authService.login(params).subscribe(x => {
      this.toastr.success('', 'Login success!');
      const roleMessage = x.role + 'Login';
      this.commonService.nextmessage(roleMessage);
      if (x.role === 'Doctor'){
        this.router.navigate(['/doctor/dashboard']);
      }
      else if (x.role === 'User'){
        this.router.navigate(['/patients/dashboard']);
      }
    }, (error) => this.toastr.error('', 'Login failed!'));
    localStorage.setItem('auth', 'true');
    localStorage.setItem('patient', this.isPatient.toString());
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
