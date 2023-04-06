import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventos:any=[];
  public eventosFiltrados:any =[];
  widthImg: number = 100;
  marginImg:number=2;
  showImg:boolean=true;
  private _filtroLista: string = '';

  public get filtroLista(){
    return this._filtroLista;
  }

  public set filtroLista(value: string){
    this._filtroLista=value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista):this.eventos;
  }

  filtrarEventos(filtrarPor:string):any{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  alterarImagem(){
    this.showImg = !this.showImg;
  }

  public getEventos(): void {
    this.http.get('https://192.168.0.250:5001/api/Eventos').subscribe(
      response => {
        this.eventos = response;
      this.eventosFiltrados = this.eventos;
      },
      error =>console.error(error)
    );
  }

}
