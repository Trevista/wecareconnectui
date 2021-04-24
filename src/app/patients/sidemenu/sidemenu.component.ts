import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from './../../common-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  name;
    patientname: string;
  constructor(
    private router: Router,
    public commonService: CommonServiceService, private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.patientname = this.auth.userValue.firstName + ' ' + this.auth.userValue.lastName;
      }

  logout() {
    localStorage.clear();
    this.commonService.nextmessage('logout');
    this.router.navigate(['/']);
  }

  navigate(name) {
    this.name = name;
    this.commonService.nextmessage(name);
  }
}
