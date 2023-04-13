import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './Componentes/Eventos/Eventos.component';
import { DashboardComponent } from './Componentes/Dashboard/Dashboard.component';
import { PalestrantesComponent } from './Componentes/Palestrantes/Palestrantes.component';
import { PerfilComponent } from './Componentes/Perfil/Perfil.component';
import { ContatosComponent } from './Componentes/Contatos/Contatos.component';

const routes: Routes = [
  {path: 'Eventos', component:EventosComponent},
  {path: 'Dashboard', component:DashboardComponent},
  {path: 'Palestrantes', component:PalestrantesComponent},
  {path: 'Perfil', component:PerfilComponent},
  {path: 'Contatos', component:ContatosComponent},
  {path: '', redirectTo:'Dashboard', pathMatch:'full'},
  {path: '**', redirectTo:'Dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
