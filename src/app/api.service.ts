import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {headers, endpoint} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getData(creditValue: number, storeId: string) {

    const urlSimulator = endpoint.credinetSimulator + `creditValue=${creditValue}&storeId=${storeId}`;
    const options = {
      headers: headers
    };

    return this.http.get(urlSimulator, options);
  }
}
