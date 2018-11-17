import { Component, OnInit } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { NgForm } from '@angular/forms';

import { MapaService } from '../shared/mapa.service';
import {Mapa} from '../shared/mapa.model';
import { UsuarioService } from '../shared/usuario.service';
import { Usuario} from '../shared/usuario.model';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
  providers: [UsuarioService]
})
export class MapaComponent implements OnInit {
  location: Object;
  number=[6.190872,-75.582664, 6.189987,-75.582986];
  title = 'googlemaps';
  title2: string = 'My first AGM project';
  lat: number = 6.190872;
  lng: number = -75.582664;
  lat2: number = 6.189987;
  lng2: number = -75.582986;
  zoom: number = 16;
  defaultLatitude:Number = 6.199548;
  defaultLongitude: Number = -75.57934;
  

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.obtenerUbications();

    this.usuarioService.getUbicacion().subscribe(location => {
      console.log(location);
      this.location = location['location'];
    },
      err => {
        console.log(err);
        return false;
      });
  }


  obtenerUbications(){
    this.usuarioService.getUbicacion().subscribe((res) => 
    {
      this.usuarioService.usuarios=res as Usuario[];
      console.log(" debug");
    });
  }

  getAllUbications() {
    this.mapaService.getUbicacions().subscribe((res) => {
      this.mapaService.ubications = res as Mapa[];
      console.log("debug");
    });
  }
}
