import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from './../../common-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  name;
  patientname: string;
  profilePic: string;
  constructor(
    private router: Router,
    public commonService: CommonServiceService,
    private auth: AuthenticationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.patientname = this.auth.userValue.firstName + ' ' + this.auth.userValue.lastName;
    this.userService.getProfile(this.auth.userValue.id).subscribe(x => {
      this.profilePic = x.profilePic || 'assets/img/patients/patient.jpg';
    });
  }

  logout() {
    localStorage.clear();
    this.commonService.nextmessage('logout');
    this.router.navigate(['/home']);
  }

  navigate(name) {
    this.name = name;
    this.commonService.nextmessage(name);
  }
}
