
import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '@app/Services/evento.service';
import { Evento } from '@app/Models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent {
  modalRef: BsModalRef | any;
  message:string='';

  public eventos: Evento[]=[];
  public eventosFiltrados: Evento[]=[];
  widthImg: number = 100;
  marginImg: number = 2;
  showImg: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista(){
    return this._filtroLista;
  }

  public set filtroLista(value: string){
    this._filtroLista=value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista):this.eventos;
  }

  public filtrarEventos(filtrarPor:string): Evento[]{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }


   constructor(
    private eventoService: EventoService,
    private modalService:BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router:Router,

    ) { }

  public ngOnInit() :void {

    this.getEventos();
    this.spinner.show();

   }

  public alterarImagem():void{
    this.showImg = !this.showImg;
  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe(
     { next: (eventos: Evento[])=>{
        this.eventos = eventos;
        this.eventosFiltrados = this.eventos;
      },

      error:(error:any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao Carregar os Dados.','Erro!');
      },

      complete:()=>this.spinner.hide()
     }
      // (eventos: Evento[]) => {
      //   this.eventos = eventos;
      // this.eventosFiltrados = this.eventos;
      // },
      // error =>console.error(error)
    );
  }

  openModal(template:TemplateRef<any>):void {
    this.modalRef = this.modalService.show(template,{class:'modal-sm'});
  }

  confirm(): void{
    this.modalRef.hide();
    this.toastr.success('Excluido com Sucesso!', 'Sucesso');
  }
  decline():void{
    this.modalRef.hide();
  }

  detalheEvento(id:number): void {
    this.router.navigate([`/Eventos/detalhe/${id}`]);
  }
}
