import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  appointmentData: any;

  getAppointmentSlotsAvailableByDoctorId(id, startDate, endDate){
    const options = id ? { params: new HttpParams().set('id', id).set('startDate', startDate).set('endDate',endDate)} : {};
    return this.http.get<any>(environment.apiUrl + `api/Appointments/GetAvailableByDoctorId`, options);
  }

  createAppointment(appointment) {
    return this.http.post<any>(environment.apiUrl + `api/Appointments`, appointment);
  }

  getAppointmentsByPatientEmail(email) {
    const options = email ? { params: new HttpParams().set('email', email)} : {};
    return this.http.get<any>(environment.apiUrl + `api/Appointments/GetByPatientEmail`, options);
  }

  getAppointmentsByDoctorId(doctorId) {
    const options = doctorId ? { params: new HttpParams().set('id', doctorId)} : {};
    return this.http.get<any>(environment.apiUrl + `api/Appointments/GetByDoctorId`, options);
  }

  getPatientsUnderDoctor(doctorId) {
    const options = doctorId ? { params: new HttpParams().set('id', doctorId)} : {};
    return this.http.get<any>(environment.apiUrl + `api/Doctors/GetPatientsunderDoctor`, options);
  }

}
