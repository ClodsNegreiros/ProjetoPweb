import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/core/services/student.service';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.css']
})
export class AccountsettingsComponent {

AccountForm:FormGroup;
logged?:Student | Teacher
session=JSON.parse(window.localStorage.getItem("user")?? "");

constructor(private formbuilder:FormBuilder,private snackbar:MatSnackBar,private studentservice:StudentService,private teacherservice:TeacherService,private router:Router){
  this.AccountForm= this.formbuilder.group({
    "nome":["",Validators.required],
    "idade":["",Validators.required],
    "telefone":["",Validators.required],
    "endereco":["",Validators.required],
    "instituicao":["",Validators.required]
  })
  if(this.session.type==='professor'){
    this.logged= new Teacher({email:this.session.email,
      password:this.session.password
    })
  }
  else{
    this.logged= new Student({subjects:this.session.subjects,email:this.session.email,password:this.session.password})

  }
  console.log(this.session.id)
  console.log(this.logged)

}


async OnSubmit(){
  if(this.AccountForm.invalid){
    return
  }

  const {nome,idade,telefone,endereco,instituicao}= this.AccountForm.value;

  if(this.session.type=="aluno"){
    const user= new Student({id:this.session.id,subjects:this.session.subjects,nome:nome,telefone:telefone,endereco:endereco,instituicao:instituicao,idade:idade,email:this.logged?.email})
    this.studentservice.editStudent(user,this.session.id).subscribe(()=>{
      this.snackbar.open(
        `o Usuário foi cadastrado com sucesso! Preencha suas informações`,
        'Ok',
        {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 4000,
        }
      );
      this.router.navigate(['/login'])
    })
  }
  else{
    const user= new Teacher({id:this.session.id,nome:nome,telefone:telefone,endereco:endereco,instituicao:instituicao,idade:idade,email:this.logged?.email})
    this.teacherservice.editTeacher(user,this.session.id).subscribe(()=>{
      this.snackbar.open(
        `o Professor foi cadastrado com sucesso! Preencha suas informações`,
        'Ok',
        {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 4000,
        }
      );
      this.router.navigate(['/login'])
    })
  }

  


}

}
