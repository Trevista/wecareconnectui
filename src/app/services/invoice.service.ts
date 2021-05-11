import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  createInvoice(invoice) {
    return this.http.post(environment.apiUrl + `api/Invoices/AddInvoice`, invoice);
  }

  getInvoiceByAppointmentId(id) {
    const options = id ? { params: new HttpParams().set('appointmentId', id)} : {};
    return this.http.get<any>(environment.apiUrl + `api/Invoices/GetInvoicesByAppointmentId`, options);
  }
}
