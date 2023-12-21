import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NotasFirebaseService } from 'src/app/core/services/notasfirebase.service';
import { StudentService } from 'src/app/core/services/student.service';
import { SubjectService } from 'src/app/core/services/subject.service';
import { Student } from 'src/app/domain/entities/Student';
import { Subject } from 'src/app/domain/entities/Subject';



interface ITurmaData{
  nome:string;
  professor:string;
}

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit{
  userlogged=JSON.parse(window.localStorage.getItem("user")??"")
  TurmaForm: FormGroup;
  materias:Subject[]=[];
  student?:Student;

  displayedColumns: string[] = ["Materia"];
  dataSource=new MatTableDataSource<Subject>();


  constructor(_router:Router,private _matsnackbar:MatSnackBar,private _FormBuilder:FormBuilder,private _subjectservice:SubjectService,private studentservice : StudentService){
    this.TurmaForm= this._FormBuilder.group({
      "materia":['',[Validators.required]],
    });
  }


  ngOnInit(): void {
      this._subjectservice.getSubjects().subscribe((subject:Subject[])=>{
     this.materias=subject
      })

      this._subjectservice.getsubjectsbystudent(this.userlogged.id).subscribe((subjects:Subject[])=>{
        this.dataSource=new MatTableDataSource(subjects);
      })


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit(){
    if(this.TurmaForm.invalid){
      return
    }
  
    const {materia} = this.TurmaForm.value;
    
    const user = JSON.parse(window.localStorage.getItem('user') ?? '');

    
    this.studentservice.inseremateria(user.id!,materia.id).subscribe(()=>{
      this._matsnackbar.open(
        
        `Inscrito na turma com sucesso!`,
        'Ok',
        {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 4000,
        }
      )
      this.userlogged.subjects.push(materia.id)
      window.localStorage.setItem("user",JSON.stringify(this.userlogged))
      this._subjectservice.getsubjectsbystudent(this.userlogged.id).subscribe((subjects:Subject[])=>{
        this.dataSource=new MatTableDataSource(subjects);
      })
    })

    
   


  }

}
