import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileloaderService {

  constructor(private http: HttpClient) { }


  uploadFile(file: FormData, folder){
    const options = folder ? { params: new HttpParams().set('folderName', folder)} : {};
    return this.http.put<any>(environment.apiUrl + `api/Files/upload`, file, options);
  }

  downloadFile(folder, file){

  }

}
