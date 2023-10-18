import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraMediaComponent } from './calculadora-media/calculadora-media.component';
import { ListarComponentesComponent } from './listar-componentes/listar-componentes.component';
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraMediaComponent,
    ListarComponentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
