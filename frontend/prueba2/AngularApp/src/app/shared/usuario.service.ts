import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor() { }
}
