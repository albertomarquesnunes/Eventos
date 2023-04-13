import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../../Services/evento.service';
import { Evento } from '../../Models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.scss'],
  //providers:[EventoService]
})
export class EventosComponent implements OnInit {






   constructor(

    ) { }

  public ngOnInit() :void {



   }

 
}
