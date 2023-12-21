import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Chart } from 'chart.js';
import { forkJoin } from 'rxjs';
import { NotasService } from 'src/app/core/services/notas.service';
import { NotasFirebaseService } from 'src/app/core/services/notasfirebase.service';
import { StudentService } from 'src/app/core/services/student.service';
import { SubjectService } from 'src/app/core/services/subject.service';
import { Grade } from 'src/app/domain/entities/Grade';
import { Student } from 'src/app/domain/entities/Student';
import { Subject } from 'src/app/domain/entities/Subject';
import { ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



interface IGrade{
  aluno:string;
  nota:number;
  materia:string;
  id:number;
}
@Component({
  selector: 'app-desempenhoturma',
  templateUrl: './desempenhoturma.component.html',
  styleUrls: ['./desempenhoturma.component.css']
})
export class DesempenhoturmaComponent implements OnInit{
  grades: IGrade[] = [];
  userlogger= JSON.parse(window.localStorage.getItem("user") ?? "")
  aluno?:string;
  materia?:string;
  displayedColumns: string[] = ['aluno', 'nota','materia', 'actions'];
  datasource= new MatTableDataSource<IGrade>();

  constructor(
    private notaservice : NotasService,
    private _snackBar: MatSnackBar,private studentsservice:StudentService,
    private subjectservice :SubjectService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.notaservice.getgradebysubject(Number(this.userlogger.subject!)).subscribe((grades: Grade[]) => {
      const observables = grades.map((grade) =>
        forkJoin([
          this.studentsservice.getStudentById(grade.student!),
          this.subjectservice.getSubjectById(grade.subject!)
        ])
      );

      forkJoin(observables).subscribe((results: [Student, Subject][]) => {
        this.grades = results.map(([student, subject], index) => ({
          nota: grades[index].valor!,
          aluno: student.nome!,
          materia: subject.nome!,
          id:grades[index].id!
        }));
        this.datasource= new MatTableDataSource(this.grades);
      });
    });
  }

  deletegrade(gradeId: number) {

   this.notaservice.deletegrade(gradeId).subscribe(()=>{
    this._snackBar.open(
      `Nota excluída com sucesso!`,
      'Ok',
      {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 4000,
      }
    );
    for(let index=0 ; index <this.grades.length; index++){
      if(this.grades[index].id==gradeId){
        this.grades.splice(index,1);
        this.datasource= new MatTableDataSource(this.grades);
      }
    }
   })
  }


}
