import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TimeSlot } from '../models/appointment-slot';
import { CountriesResponse } from '../models/countriesresponse';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getProfiles(){
    return this.http.get<Profile[]>(environment.apiUrl + `api/profiles`);
  }

  getProfile(userId){
    return this.http.get<Profile>(environment.apiUrl + `api/profiles/` + userId);
  }

  saveProfile(profile){
    return this.http.post(environment.apiUrl + `api/profiles/`, profile);
  }

  updateProfile(profile: Profile){
    return this.http.put(environment.apiUrl + `api/profiles/` + profile.userId, profile);
  }
  Addtimeslots(scheduletiming) {
    return this.http.post(environment.apiUrl + `api/AppointmentSlots`, scheduletiming);
  }
  getTimeslot(id) {
    return this.http.get<TimeSlot>(environment.apiUrl + `api/AppointmentSlots/GetDoctorTimeSlots?id=` + id);
  }

  deleteTimeslot(timeSlotId) {
    return this.http.delete(environment.apiUrl + `api/AppointmentSlots/` + timeSlotId);
  }

  getCountriesResponse(){
    return this.http.get<CountriesResponse>(environment.apiUrl + `api/Profiles/FetchCountryList`);
  }

  getDoctors(){
    return this.http.get<any>(environment.apiUrl + `api/Dashboards/DashBoardDoctors`);
  }

  getCouponByCode(code){
    const options = code ? { params: new HttpParams().set('code', code)} : {};
    return this.http.get<any>(environment.apiUrl + `api/Coupons/GetByCode`, options);
  }

}
