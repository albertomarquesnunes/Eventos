import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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

        password: ['', [Validators.required,Validators.minLength(8)]],
        username: ['',  [Validators.required,Validators.email]],
    })
  }

}

