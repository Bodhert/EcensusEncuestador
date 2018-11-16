import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Ubication } from './ubication.model';

@Injectable({
  providedIn: 'root'
})
export class UbicationService {
  selectedUbication: Ubication;
  ubications: Ubication[];
  readonly baseURL = 'http//localhost:3000/ubications' // NOTE: this is the line to change for the real url 


  constructor(private http: HttpClient) { }

  getAllUbications() {
    return this.http.get.(this.baseURL);
  }
}
