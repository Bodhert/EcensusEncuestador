import { Component, OnInit } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
  providers: []
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

  constructor() { }

  ngOnInit() {
    console.log("hola")
  }

}
