import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
//import "rxjs";
//import { map, filter, switchMap } from 'rxjs/operators';
//import { Observable } from 'rxjs';
//import {  delay } from 'rxjs/operators';
//import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
//import { map, filter, switchMap } from 'rxjs/operators';
import "rxjs";
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import{ Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectUsuario: Usuario;
  usuarios: Usuario[];
  readonly baseURL = 'https://shrouded-brook-34278.herokuapp.com/ubications'
  readonly baseURLpersona = 'https://shrouded-brook-34278.herokuapp.com/ubications'

  constructor(private http : HttpClient) { }
 // constructor() { }

  postUsuario(usr : Usuario){
   return this.http.post(this.baseURL, usr);
  }

 getUbicacion(){
  console.log(" gdfkgdfskl");
  return this.http.get(this.baseURL);
 }


}
