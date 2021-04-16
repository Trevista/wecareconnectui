import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authService: AuthenticationService,
              private router: Router,
              private toastr: ToastrService) { }
  
  canActivate() {
    console.log("In CanActivate...")
    if(this.authService.isAuthenticated()){
      let token = localStorage.getItem('user');
      let serverRecord = JSON.parse(token);
      if(serverRecord.role === 'Doctor'){
        console.log("Authenticated Role: " , serverRecord.role);
        return true;
      }
      this.toastr.warning("Permission Denied! You Are not a Doctor.");
      console.log("Un-Authenticated. You are Not Doctor");
      return false;
    }
    else{
      this.toastr.error("You Are UnAuthorize, Please Login to Continue!");
      console.log("Permission Denied.");
      this.router.navigate(['/login-page']);
      return false;
    }
    // throw new Error('Method not implemented.');
  }
}
