import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { PaginaComponent } from './pagina/pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    MapaComponent,
    PaginaComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOH1yUJh4PWmJ4wFtMuhV7W50aoqtvYm4'
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
