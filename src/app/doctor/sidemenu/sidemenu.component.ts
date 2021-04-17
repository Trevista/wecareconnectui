import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
} from '@angular/router';

import { CommonServiceService } from './../../common-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  name;
  splitVal;
  base;
  page;
    doctorName: string;
  constructor(
    private router: Router,
    public commonService: CommonServiceService, private auth: AuthenticationService
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (event instanceof NavigationStart) {
          this.splitVal = event.url.split('/');
          this.base = this.splitVal[1];
          this.page = this.splitVal[2];
        }
      }
    });
  }

  ngOnInit(): void {
    //console.log(this.auth.userValue);
    this.doctorName = this.auth.userValue.firstName + ' ' + this.auth.userValue.lastName;
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
