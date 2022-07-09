import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { headers } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  _urlGet = 'https://devapi.credinet.co/simulator/getTotalFeeValue?creditValue=400000&storeId=5cbe1d8704ea5626804cfc85'
  constructor(
    private http: HttpClient
  ) {
  }
  public getData() {
    return this.http.get(this._urlGet, {
      headers: headers
    });
  }
}
