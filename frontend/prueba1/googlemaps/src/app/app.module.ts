import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//importaciones
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3rv19hs2bnXl941hjz9_BICT6MZa_HkY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
