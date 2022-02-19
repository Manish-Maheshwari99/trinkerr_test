import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  BASE_URL = 'http://3.109.141.224:5000';

  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/user-access-token`);
  }

  getStock(token: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('user-access-token', token)
    return this.http.get(`${this.BASE_URL}/api/data?search_string=`, {headers})
  }

}
