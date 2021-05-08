import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
 // headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  apiUrl: string = 'http://praveenkumars219-001-site12.etempurl.com/api/Reviews/GetReviews';
  get_reviews() {
    return this.http.get<any>(this.apiUrl);
    
  }
}
