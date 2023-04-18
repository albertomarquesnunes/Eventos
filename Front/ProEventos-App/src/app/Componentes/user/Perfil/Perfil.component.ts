import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControlOptions, Validators } from '@angular/forms';
import { ValidatorField } from '@app/Helpers/ValidatorField';

@Component({
  selector: 'app-Perfil',
  templateUrl: './Perfil.component.html',
  styleUrls: ['./Perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  form!: FormGroup;
  get f():any{
    return this.form.controls;
  }

  constructor(private fb:FormBuilder) {}

  ngOnInit() :void{
    this.validation();
  }
  onSubmit():void {

    //vai parar aqui se o from estiver invalido
    if(this.form.invalid){
      return;
    }
  }

  public validation():void{
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('password','confirmPassword')
    };

  this.form = this.fb.group({
      firstName: ['',  Validators.required],
      lastName: ['',  Validators.required],
      mail: ['',  [Validators.required,Validators.email]],
      agreed: ['',  [Validators.required,Validators.requiredTrue]],
      telefone: ['',  [Validators.required,Validators.minLength(8)]],
      descricao: ['',  [Validators.required,Validators.minLength(8)]],
      username: ['',  [Validators.required,Validators.minLength(3)]],
      password: ['', [Validators.required,Validators.minLength(3)]],
      confirmPassword: ['',  Validators.required],
  }, formOptions);
}

public resetForm(event:any):void {
  event.preventDefault();
  this.form.reset();
}
}
