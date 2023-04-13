import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './Componentes/Eventos/Eventos.component';
import { DashboardComponent } from './Componentes/Dashboard/Dashboard.component';
import { PalestrantesComponent } from './Componentes/Palestrantes/Palestrantes.component';
import { PerfilComponent } from './Componentes/user/Perfil/Perfil.component';
import { ContatosComponent } from './Componentes/Contatos/Contatos.component';
import { EventoDetalheComponent } from './Componentes/Eventos/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './Componentes/Eventos/evento-lista/evento-lista.component';
import { UserComponent } from './Componentes/user/user.component';
import { RegistrationComponent } from './Componentes/user/registration/registration.component';
import { LoginComponent } from './Componentes/user/login/login.component';

const routes: Routes = [
  {
    path: 'user',component:UserComponent,
      children:[
        {path: 'login',component:LoginComponent},
        {path: 'registration',component:RegistrationComponent},

      ]
  },
  {path: 'user/Perfil', component:PerfilComponent},
  {path:'Eventos', redirectTo:'Eventos/lista'},
  {path: 'Eventos', component:EventosComponent,
      children:[
        {path: 'detalhe/:id', component:EventoDetalheComponent},
        {path: 'detalhe', component:EventoDetalheComponent},
        {path: 'lista', component:EventoListaComponent},
      ]
    },
  {path: 'Dashboard', component:DashboardComponent},
  {path: 'Palestrantes', component:PalestrantesComponent},
  {path: 'Contatos', component:ContatosComponent},
  {path: '', redirectTo:'Dashboard', pathMatch:'full'},
  {path: '**', redirectTo:'Dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
