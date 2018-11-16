import { Component, OnInit } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';

import { NgForm } from '@angular/forms';
import { UsuarioService } from '../shared/usuario.service';
import { Usuario} from '../shared/usuario.model';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
<<<<<<< HEAD
  providers: [UsuarioService]
=======
  providers: []
>>>>>>> 73acabc7ec228907b9654c640924d3ac55812203
})
export class MapaComponent implements OnInit {

  number=[6.190872,-75.582664, 6.189987,-75.582986];
  title = 'googlemaps';
  title2: string = 'My first AGM project';
  lat: number = 6.190872;
  lng: number = -75.582664;
  lat2: number = 6.189987;  
  lng2: number= -75.582986;
  zoom: number = 16;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
<<<<<<< HEAD
    this.obtenerUbications();
  }


  obtenerUbications(){
    this.usuarioService.getUbicacion().subscribe((res) => {
      this.usuarioService.usuarios=res as Usuario[];
    });
=======
    console.log("hola")
>>>>>>> 73acabc7ec228907b9654c640924d3ac55812203
  }

}
