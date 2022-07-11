import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {headers, endpoints} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getData(creditValue: number, storeId: string) {

    const urlSimulator = `${endpoints.credinetSimulator}creditValue=${creditValue}&storeId=${storeId}`;
    const options = {
      headers: headers
    };

    return this.http.get(urlSimulator, options);
  }
}
