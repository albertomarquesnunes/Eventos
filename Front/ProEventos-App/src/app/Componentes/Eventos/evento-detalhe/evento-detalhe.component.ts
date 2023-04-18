import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {

   _DATE_REGEX = new RegExp(/^(\d{2}|\d{1})\/(\d{2}|\d{1})\/\d{4}$/);
  form!: FormGroup;
  get f():any{
    return this.form.controls;
  }

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.validation();
  }

  public validation():void{
    this.form = this.fb.group({
        local: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(50)]],
        dataEvento: ['', [Validators.required,Validators.pattern(this._DATE_REGEX)]],
        tema: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(50)]],
        qtdPessoas: ['', [Validators.required,Validators.max(125000)]],
        imagemURL: ['',Validators.required],
        telefone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(16)]],
        email: ['',  [Validators.required,Validators.email]],
    })
  }

  public resetForm(event:any):void {
    event.preventDefault();
    this.form.reset();
  }

}
