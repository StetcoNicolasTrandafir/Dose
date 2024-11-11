import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private URL_SERVICE = "http://localhost:1337/";
  constructor(private http: HttpClient) { }

  get(endpoint: string, params: any = {}): Observable<any> {
    const httpParams = new HttpParams({ fromObject: params });
    const headers = new HttpHeaders({
      //    'Content-Type': 'application/json; charset=utf-8',
      'token': 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get(this.URL_SERVICE+endpoint, { params: httpParams, headers: headers });
  }

  post(endpoint: string, data: any = {}): Observable<any> {
    const headers = new HttpHeaders({
      //    'Content-Type': 'application/json; charset=utf-8',
      'token': 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.post(this.URL_SERVICE+endpoint, data, { headers: headers });
  }
}
