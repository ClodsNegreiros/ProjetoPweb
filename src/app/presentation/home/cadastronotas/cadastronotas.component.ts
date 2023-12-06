import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { NotasService } from 'src/app/core/services/notas.service';
import { NotasFirebaseService } from 'src/app/core/services/notasfirebase.service';
import { StudentService } from 'src/app/core/services/student.service';
import { Grade } from 'src/app/domain/entities/Grade';
import { Student } from 'src/app/domain/entities/Student';
import { Subject } from 'src/app/domain/entities/Subject';

@Component({
  selector: 'app-cadastronotas',
  templateUrl: './cadastronotas.component.html',
  styleUrls: ['./cadastronotas.component.css']
})
export class CadastronotasComponent implements OnInit{

  Notas: Grade[] = []
  alunos:Student[]=[]
  GradeForm: FormGroup

  constructor(_router:Router,private _matsnackbar:MatSnackBar, private _notasservice:NotasFirebaseService,private _FormBuilder:FormBuilder,private _alunosservice:StudentService){
    this.GradeForm= this._FormBuilder.group({
      "valor":['',[Validators.required]],
      "aluno":['',[Validators.required]]
    });
  }

   ngOnInit(): void {
    this._alunosservice.getStudents().subscribe(
    (students:Student[])=>{
      this.alunos=students.filter((student:Student)=>{
        return student.subjects?.filter((subject:Subject)=>{
          return subject.name==="PWEB"
        })
      });
    }
    )
   }


checkvalidility(){
  Object.keys(this.GradeForm.controls).forEach((controlKey) => {
    if (this.GradeForm.controls[controlKey].invalid) {
      this.GradeForm.controls[controlKey].markAsDirty();

    }
  })
}

undirty(){
  Object.keys(this.GradeForm.controls).forEach((controlKey) => {
      this.GradeForm.controls[controlKey].markAsPending();
  })
}

  onSubmit(){
    this.checkvalidility();
    if(!this.GradeForm.invalid){
      const {valor,aluno}= this.GradeForm.value;
      const nota = new Grade("",{
        value:valor,
        student:{name:aluno},
        subject:{name:"PWEB"}
      });
      this._notasservice.inserir(nota).subscribe(()=>{
        this._matsnackbar.open(
          `Nota cadastrada com sucesso!`,
          'Ok',
          {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 4000,
          }
        );
        this.GradeForm.reset();
        this.undirty()
      });
    }
    else{
      this._matsnackbar.open(
        `Erro no cadastro da nota!`,
        'Ok',
        {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 4000,
        }
      );
    }
  }







}
