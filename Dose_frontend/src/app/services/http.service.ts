import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private URL_SERVICE = "http://localhost:1337/";
  constructor(private http: HttpClient) { }

  get(endpoint: string, params: any = {}, headers: any = {}): Observable<any> {
    const httpParams = new HttpParams({ fromObject: params });
    const httpHeaders = new HttpHeaders(headers);
    return this.http.get(this.URL_SERVICE+endpoint, { params: httpParams, headers: httpHeaders });
  }

  post(endpoint: string, data: any = {}, headers: any = {}): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', ...headers });
    return this.http.post(this.URL_SERVICE+endpoint, data, { headers: httpHeaders });
  }
}
