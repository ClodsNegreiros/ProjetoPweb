import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { NotasService } from 'src/app/core/services/notas.service';
import { StudentService } from 'src/app/core/services/student.service';
import { SubjectService } from 'src/app/core/services/subject.service';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { Grade } from 'src/app/domain/entities/Grade';
import { Student } from 'src/app/domain/entities/Student';
import { Subject } from 'src/app/domain/entities/Subject';
import { Teacher } from 'src/app/domain/entities/Teacher';

@Component({
  selector: 'app-cadastronotas',
  templateUrl: './cadastronotas.component.html',
  styleUrls: ['./cadastronotas.component.css']
})
export class CadastronotasComponent implements OnInit{
  materia?:Subject;
  Notas: Grade[] = []
  alunos:Student[]=[]
  logged= JSON.parse(window.localStorage.getItem("user")??"");
  GradeForm: FormGroup;

  constructor(_router:Router,private _matsnackbar:MatSnackBar,private subjectservice:SubjectService , private _notasservice:NotasService,private teacherservice:TeacherService,private studentsservice: StudentService,private _FormBuilder:FormBuilder){
    this.GradeForm= this._FormBuilder.group({
      "valor":['',[Validators.required]],
      "aluno":['',[Validators.required]]
    });
  }

   ngOnInit(): void {
    this.subjectservice.getSubjectById(this.logged.subject).subscribe((subject:Subject)=>{
      this.materia=subject;
      for( let id  of subject.students!){
       this.studentsservice.getStudentById(Number(id)).subscribe((student:Student)=>{
        this.alunos.push(student);
       })
      }
    })
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

  async onSubmit(){
    this.checkvalidility();
    if(!this.GradeForm.invalid){
     
      const {valor,aluno}= this.GradeForm.value;
      const nota= new Grade({valor:valor,student:aluno.id,subject:this.materia?.id!});
     
      this._notasservice.addGrade(nota).subscribe(()=>{
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
        `Erro no cadastro da nota.Tente Novamente!`,
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
