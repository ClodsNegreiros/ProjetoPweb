import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NotasFirebaseService } from 'src/app/core/services/notasfirebase.service';
import { StudentService } from 'src/app/core/services/student.service';
import { SubjectService } from 'src/app/core/services/subject.service';
import { Student } from 'src/app/domain/entities/Student';
import { Subject } from 'src/app/domain/entities/Subject';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit{

  TurmaForm: FormGroup;
  materias:Subject[]=[];
  student?:Student;


  constructor(_router:Router,private _matsnackbar:MatSnackBar,private _FormBuilder:FormBuilder,private _subjectservice:SubjectService,private studentservice : StudentService){
    this.TurmaForm= this._FormBuilder.group({
      "materia":['',[Validators.required]],
    });
  }


  ngOnInit(): void {
      this._subjectservice.getSubjects().subscribe((subject:Subject[])=>{
        this.materias=subject;
      })
  }

  onSubmit(){
    if(this.TurmaForm.invalid){
      return
    }
  
    const {materia} = this.TurmaForm.value;
    
    const user = JSON.parse(window.localStorage.getItem('user') ?? '')

    this.studentservice.getStudentById(user.id!).subscribe((student:Student)=>{
      const aluno = new Student({id:student.id,email:student.email,name:student.name,password:student.password,subjects:student.subjects})
      aluno.subjects.push(materia)

      console.log(aluno)
        
    this.studentservice.editStudent(aluno,user.id!).subscribe(()=>{
      this._matsnackbar.open(
        
        `Inscrito na turma com sucesso!`,
        'Ok',
        {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 4000,
        }
      )
    });
      
    })


 

  }

}
