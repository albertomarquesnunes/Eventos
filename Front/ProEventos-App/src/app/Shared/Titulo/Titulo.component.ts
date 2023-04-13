import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Titulo',
  templateUrl: './Titulo.component.html',
  styleUrls: ['./Titulo.component.scss']
})
export class TituloComponent implements OnInit{

   @Input() titulo:string ='';
   @Input() iconClass:string='fa fa-calendar';
   @Input() subtitulo:string='Since 2023';
   @Input() botaoListar = false;
  constructor(private router:Router) { }

  ngOnInit():void {

  }

  listar():void {
    this.router.navigate([`/${this.titulo}/lista`]);
  }

}
