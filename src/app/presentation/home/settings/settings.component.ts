import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{

  logged?:Student | Teacher
  formsettings: FormGroup


  constructor(private formbuilder:FormBuilder,private snackbar:MatSnackBar){
    this.logged= JSON.parse(window.localStorage.getItem('user') ?? '');

    this.formsettings= this.formbuilder.group({
      "nome":[JSON.parse(window.localStorage.getItem('user') ?? '').name,Validators.required],
      "instituicao":[JSON.parse(window.localStorage.getItem('user') ?? '').instituicao,Validators.required],
      "tipo":[JSON.parse(window.localStorage.getItem('user') ?? '').type
      ,Validators.required],
      "idade":[JSON.parse(window.localStorage.getItem('user') ?? '').age,Validators.required],
      "email":[this.logged?.email,Validators.required],
      "endereco":[JSON.parse(window.localStorage.getItem('user') ?? '').endereco,Validators.required],
      "telefone":[JSON.parse(window.localStorage.getItem('user') ?? '').telefone,Validators.required]
      
    })
  }

  ngOnInit(): void {
      
  
  }

  async OnSubmit(){

  }

}
