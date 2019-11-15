import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MascotasListarComponent } from './mascotas/mascotas-listar/mascotas-listar.component';
import { MascotasAgregarComponent } from './mascotas/mascotas-agregar/mascotas-agregar.component';
import { MascotasEditarComponent } from './mascotas/mascotas-editar/mascotas-editar.component';
import { MascotasListarPublicaComponent } from './mascotas/mascotas-listar-publica/mascotas-listar-publica.component';
import { MascotasDetalleComponent } from './mascotas/mascotas-detalle/mascotas-detalle.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'mascotas-listar', component: MascotasListarComponent},
  { path: 'mascotas-listar-publica', component: MascotasListarPublicaComponent},
  { path: 'mascotas-agregar', component: MascotasAgregarComponent},
  { path: 'mascotas-detalle/:id', component: MascotasDetalleComponent},
  { path: 'mascotas-editar/:id', component: MascotasEditarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
