import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';

//Componentes personalizados
import { AppComponent } from './app.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { GraficosComponent } from './components/graficos/graficos.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    ListadoComponent,
    ActualizarComponent,
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
