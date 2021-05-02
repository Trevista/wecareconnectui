import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile, Timeslot } from '../models/profile';

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
    return this.http.get<Timeslot>(environment.apiUrl + `api/AppointmentSlots/GetDoctorTimeSlots?id=` + id);
  }
}
