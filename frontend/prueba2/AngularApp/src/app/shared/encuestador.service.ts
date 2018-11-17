import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import "rxjs";
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import{ Encuestador } from './encuestador.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestadorService {

  selectEncuestador: Encuestador;
  encuestadores: Encuestador[];
  readonly baseURL = 'http://localhost:3000/ubications'

  constructor(private http : HttpClient) { }

  postUsuario(usr : Encuestador){
    console.log(this.encuestadores);
    return this.http.post(this.baseURL, usr);

   }

  putUsuario(usr: Encuestador){
    return this.http.put(this.baseURL + `/${usr._id}` ,usr);
  }
 
  deleteUsuario(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  getUsuario(){
    console.log("Obtuvo Usuario 1");
    console.log(this.http.get(this.baseURL));
    return this.http.get(this.baseURL);
  }
 
}
