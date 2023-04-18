import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControlOptions } from '@angular/forms';
import { ValidatorField } from '@app/Helpers/ValidatorField';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;
  get f():any{
    return this.form.controls;
  }

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.validation();
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
        username: ['',  [Validators.required,Validators.minLength(3)]],
        password: ['', [Validators.minLength(3)]],
        confirmPassword: [''],
    }, formOptions);
  }



}
