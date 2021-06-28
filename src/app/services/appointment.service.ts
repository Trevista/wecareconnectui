import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  appointmentData: any;
  private prescriptionData: any;

  getAppointmentSlotsAvailableByDoctorId(id, startDate, endDate){
    const options = id ? { params: new HttpParams().set('id', id).set('startDate', startDate).set('endDate',endDate)} : {};
    return this.http.get<any>(environment.apiUrl + `api/Appointments/GetAvailableByDoctorId`, options);
  }

  getAppointmentSlots(id){
    const options = id ? { params: new HttpParams().set('id', id)} : {};
    return this.http.get<any>(environment.apiUrl + `api/AppointmentSlots/GetDoctorTimeSlots`, options);
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

  getAppointmentById(id) {
    return this.http.get<any>(environment.apiUrl + `api/Appointments/` + id);
  }

  getPatientsUnderDoctor(doctorId) {
    const options = doctorId ? { params: new HttpParams().set('id', doctorId)} : {};
    return this.http.get<any>(environment.apiUrl + `api/Doctors/GetPatientsunderDoctor`, options);
  }

  updateAppointmentStatus(id, status, date) {
    const options = id ? { params: new HttpParams().set('id', id).set('status', status)} : {};
    if(date !== null){
      options.params.append('rescheduleDate', date);
    }
    return this.http.put<any>(environment.apiUrl + `api/Appointments/updatestatus`, null, options);
  }

  getInvoicesByDoctorId(doctorId){
    const options = doctorId ? { params: new HttpParams().set('doctorId', doctorId)} : {};
    return this.http.get<any>(environment.apiUrl + `api/Invoices/GetInvoicesByDoctorId`, options);
  }

  getInvoicesByPatientEmail(email){
    const options = email ? { params: new HttpParams().set('email', email)} : {};
    return this.http.get<any>(environment.apiUrl + `api/Invoices/GetInvoicesByPatientEmail`, options);
  }

  addAppointmentNote(appointment){
    return this.http.post<any>(environment.apiUrl + `api/AppointmentNotes`, appointment);
  }

  updateAppointmentNotes(appointment){
    return this.http.put<any>(environment.apiUrl + `api/AppointmentNotes`, appointment);
  }

  addAppointmentPrescriptions(appointment){
    return this.http.post<any>(environment.apiUrl + `api/AppointmentPrescriptions`, appointment);
  }

  updateAppointmentPrescriptions(appointment){
    return this.http.put<any>(environment.apiUrl + `api/AppointmentPrescriptions`, appointment);
  }

  getAppointmentNotes(appointmentId){
    const options = appointmentId ? { params: new HttpParams().set('id', appointmentId)} : {};
    return this.http.get<any>(environment.apiUrl + `api/AppointmentNotes/GetByAppointmentId`, options);
  }

  getAppointmentPrescriptions(appointmentId){
    const options = appointmentId ? { params: new HttpParams().set('id', appointmentId)} : {};
    return this.http.get<any>(environment.apiUrl + `api/AppointmentPrescriptions/GetByAppointmentId`, options);
  }

  getAppointmentPrescriptionByPatientId(userId){
    const options = userId ? { params: new HttpParams().set('id', userId)} : {};
    return this.http.get<any>(environment.apiUrl + `api/AppointmentPrescriptions/GetByPatientId`, options);
  }
  
  set prescription(prescription:any) {
      this.prescriptionData = prescription;
  }

  get prescription(): any {
    return this.prescriptionData;
  }
}
