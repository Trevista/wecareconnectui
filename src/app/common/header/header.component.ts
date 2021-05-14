import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  Inject,
  OnDestroy,
} from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
  NavigationEnd,
} from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { CommonServiceService } from './../../common-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  onlineEvent: Observable<Event> | any;
  offlineEvent: Observable<Event> | any;
  subscriptions: Subscription[] = [];
  profile;

  connectionStatusMessage: string;
  connectionStatus: string;

  auth = false;
  isPatient = false;
  page;
  splitVal;
  headerTop = false;
  base;
  url1;
    doctorname: string;
  constructor(
    @Inject(DOCUMENT) private document,
    private cdr: ChangeDetectorRef,
    public router: Router,
    private activeRoute: ActivatedRoute,
    public commonService: CommonServiceService,
    private authentication: AuthenticationService,
    private userService: UserService
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        let res = event.url.split('/');
        this.base = res[1];
        this.page = res[2];
        if (event.url === '/home-slider-one') {
          this.headerTop = true;
        } else {
          this.headerTop = false;
        }
      }
    });
    this.url1 = this.router.url;
    this.commonService.message.subscribe((res) => {
      console.log(res);
      if (res === 'UserLogin') {
        this.auth = true;
        // this.isPatient = true;
      }
      if (res === 'DoctorLogin') {
        this.auth = true;
        // this.isPatient = false;
      }
      if (res === 'logout') {
        this.auth = false;
        this.isPatient = false;
      }
    });
  }

  ngOnInit(): void {

     this.onlineEvent = fromEvent(window, 'online');
     this.offlineEvent = fromEvent(window, 'offline');

     this.subscriptions.push(this.onlineEvent.subscribe(e => {
       this.connectionStatusMessage = 'Back to online';
       this.connectionStatus = 'online';
       window.location.reload();
       console.log('Online...');
     }));

     this.subscriptions.push(this.offlineEvent.subscribe(e => {
       this.connectionStatusMessage = 'Connection lost! You are not connected to internet';
       this.connectionStatus = 'offline';
       console.log('Offline...');
     }));


     this.doctorname = this.authentication.userValue.firstName + ' ' + this.authentication.userValue.lastName;
     if (localStorage.getItem('auth') === 'true') {
      this.auth = true;
      this.isPatient =
        localStorage.getItem('patient') === 'true' ? true : false;
    }
     this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        $('html').removeClass('menu-opened');
        $('.sidebar-overlay').removeClass('opened');
        $('.main-wrapper').removeClass('slide-nav');
      }
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.loadDynmicallyScript('assets/js/script.js');
  }
  loadDynmicallyScript(js) {
    let script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.head.appendChild(script);
    script.onload = () => this.doSomethingWhenScriptIsLoaded();
  }
  doSomethingWhenScriptIsLoaded() {}
  change(name) {
    this.page = name;
    this.commonService.nextmessage('main');
  }

  mapGrid() {
    this.router.navigate(['/map-grid']);
  }

  mapList() {
    this.router.navigate(['/map-list']);
  }

  addStyle(val) {
    if (val === 'home') {
      if (document.getElementById('home').style.display === 'block') {
        document.getElementById('home').style.display = 'none';
      } else {
        document.getElementById('home').style.display = 'block';
      }
    }
    if (val === 'doctor') {
      if (document.getElementById('doctor').style.display === 'block') {
        document.getElementById('doctor').style.display = 'none';
      } else {
        document.getElementById('doctor').style.display = 'block';
      }
    }
    if (val === 'patient') {
      if (document.getElementById('patient').style.display === 'block') {
        document.getElementById('patient').style.display = 'none';
      } else {
        document.getElementById('patient').style.display = 'block';
      }
    }
    if (val === 'pharmacy') {
      if (document.getElementById('pharmacy').style.display === 'block') {
        document.getElementById('pharmacy').style.display = 'none';
      } else {
        document.getElementById('pharmacy').style.display = 'block';
      }
    }
    if (val === 'pages') {
      if (document.getElementById('pages').style.display === 'block') {
        document.getElementById('pages').style.display = 'none';
      } else {
        document.getElementById('pages').style.display = 'block';
      }
    }
    if (val === 'blog') {
      if (document.getElementById('blog').style.display === 'block') {
        document.getElementById('blog').style.display = 'none';
      } else {
        document.getElementById('blog').style.display = 'block';
      }
    }
    if (val === 'admin') {
      if (document.getElementById('admin').style.display === 'block') {
        document.getElementById('admin').style.display = 'none';
      } else {
        document.getElementById('admin').style.display = 'block';
      }
    }
  }

  doctor(name) {
    this.page = name;
    this.router.navigate(['/doctor/dashboard']);
  }

  logout() {
    localStorage.clear();
    this.commonService.nextmessage('logout');
    this.router.navigate(['/home']);
  }

  home() {
    this.commonService.nextmessage('main');
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['/']);
    });
  }

  navigate(name) {
    this.page = name;
    if (name === 'Admin') {
      this.router.navigate(['/admin']);
      this.commonService.nextmessage('admin');
    } else if (name === 'Pharmacy Admin') {
      this.router.navigate(['/pharmacy-admin']);
      this.commonService.nextmessage('pharmacy-admin');
    }
  }

  ngOnDestroy(): void {
    /**
    * Unsubscribe all subscriptions to avoid memory leak
    */
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
