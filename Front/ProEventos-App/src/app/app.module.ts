import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalestrantesComponent } from './Componentes/Palestrantes/Palestrantes.component';
import { EventosComponent } from './Componentes/Eventos/Eventos.component';
import { NavComponent } from './Shared/Nav/Nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventoService } from './Services/evento.service';
import { DateTimeFormatPipe } from './Helpers/DateTimeFormat.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TituloComponent } from './Shared/Titulo/Titulo.component';
import { PerfilComponent } from './Componentes/user/Perfil/Perfil.component';
import { ContatosComponent } from './Componentes/Contatos/Contatos.component';
import { DashboardComponent } from './Componentes/Dashboard/Dashboard.component';
import { EventoDetalheComponent } from './Componentes/Eventos/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './Componentes/Eventos/evento-lista/evento-lista.component';
import { UserComponent } from './Componentes/user/user.component';
import { LoginComponent } from './Componentes/user/login/login.component';
import { RegistrationComponent } from './Componentes/user/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
     PalestrantesComponent,
     PerfilComponent,
     ContatosComponent,
     DashboardComponent,
     EventosComponent,
     NavComponent,
     TituloComponent,
     DateTimeFormatPipe,
     EventoDetalheComponent,
     EventoListaComponent,
     UserComponent,
     LoginComponent,
     RegistrationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgxSpinnerModule.forRoot(),
    ToastrModule.forRoot({
              timeOut:3000,
              positionClass:'toast-botton-right',
              preventDuplicates:true,
              progressBar:true,
            }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EventoService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
