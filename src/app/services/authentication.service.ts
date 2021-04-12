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

  forgotpassword(email){
    const options = email ? { params: new HttpParams().set('email', email)} : {};
    return this.http.get<any>(environment.apiUrl + 'api/accounts/forgot-password', options);
  }

  resetpassword(resetmodel){
    return this.http.post<any>(environment.apiUrl + 'api/accounts/reset-password', resetmodel);
  }

  logout(){
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }



}
