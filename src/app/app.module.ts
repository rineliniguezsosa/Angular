import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

@NgModule({
  declarations: [ //Aqui establecemos los componentes de la aplicación
    AppComponent,
    HomeComponentComponent,
    HousingLocationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
