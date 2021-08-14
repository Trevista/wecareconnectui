import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  role;

  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): any {
    return this.userSubject.value;
  }

  login(model){
    console.log("In Login Service...");
    return this.http.post(environment.apiUrl + 'api/Accounts/authenticate', model).pipe(map((userdata: any) => {
      localStorage.setItem('user', JSON.stringify(userdata));
      this.userSubject.next(userdata);
      return userdata;
    }));
  }

  register(register: any) {
    console.log("Creating account...", register);
    return this.http.post<any>(environment.apiUrl + 'api/Accounts/register', register);
  }

  verifyemail(token, user){
    const options = token ? { params: new HttpParams().set('userId', user).set('token', token)} : {};
    return this.http.get<any>(environment.apiUrl + 'api/accounts/confirmemail', options);
  }

  forgotpassword(params){
    console.log("Service layer forgot password of: ", params);
    // const options = email ? { params: new HttpParams().set('email', email)} : {};
    return this.http.post<any>(environment.apiUrl + 'api/Accounts/forgot-password', params);
  }

  resetpassword(resetmodel){
    return this.http.post<any>(environment.apiUrl + 'api/accounts/reset-password', resetmodel);
  }

  changePassword(changepasswordmodel){
    return this.http.post<any>(environment.apiUrl + 'api/Accounts/change-password', changepasswordmodel);
  }

  resetPassword(resetpasswordmodel){
    return this.http.post<any>(environment.apiUrl + 'api/Accounts/reset-password', resetpasswordmodel);
  }

  resetPasswordWithPhone(resetpasswordmodel){
    return this.http.post<any>(environment.apiUrl + 'api/Accounts/resetPasswordWithPhone', resetpasswordmodel);
  }

  getOTP(phoneNumber){
    return this.http.get<any>(environment.apiUrl + 'api/Accounts/SendOTP?phoneNumber=' + phoneNumber);
  }

  getOTPWithNewNumber(phoneNumber){
    return this.http.get<any>(environment.apiUrl + 'api/Accounts/GetOTPWithNewNumber?phoneNumber=' + phoneNumber);
  }

  authOTPLogin(id, otp){
    return this.http.get<any>(environment.apiUrl + 'api/Accounts/OtpAuthentication?id=' + id + '&otp=' + otp).pipe(map((userdata: any) => {
      localStorage.setItem('user', JSON.stringify(userdata));
      this.userSubject.next(userdata);
      return userdata;
    }));
  }

  logout(){
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  //GLOBAL TOKEN FOR SECURE LOGIN
  //  token: boolean = false;
  isAuthenticated(){
    console.log("In isAuthenticated...")
    let token = localStorage.getItem('user');

    if(token){
      console.log("Token is present?: ", token);
      return true;
    }
    else{
      console.log("NO Token is Present" , token)
      return false;
    }

  }


}
