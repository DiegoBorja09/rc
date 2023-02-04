import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Componentes personalizados del proyecto
import { ListadoComponent } from './components/listado/listado.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { GraficosComponent } from './components/graficos/graficos.component';
const routes: Routes = [
  { path: '', component: ListadoComponent },
  { path: 'nuevo', component: NuevoComponent },
  { path: 'actualizar/:id', component: ActualizarComponent },
  { path: 'graficos', component: GraficosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
