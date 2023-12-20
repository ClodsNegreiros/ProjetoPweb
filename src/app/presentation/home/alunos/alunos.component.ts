import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotasService } from 'src/app/core/services/notas.service';
import { SubjectService } from 'src/app/core/services/subject.service';
import { IGradeData } from '../notas/notas.component';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/domain/entities/Student';


interface IAlunoData{
nome:string;
email:string;
}
@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit{
displayedColumns: string[] = ["Nome","Email"];
  dataSource: MatTableDataSource<IAlunoData>=new MatTableDataSource();
  userlogged =JSON.parse(window.localStorage.getItem("user")?? "");
  alunos:IAlunoData[];


  constructor(private notasservico:NotasService,private subjectservice:SubjectService,private teacherservice:TeacherService,private studentservice:StudentService) {
    this.alunos=[]
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

ngOnInit(): void {
  this.studentservice.getstudentsbysubject(this.userlogged.subject!).subscribe((students:Student[])=>{
    for (let student of students){
      this.alunos.push({email:student.email!,nome:student.nome!})
      this.dataSource= new MatTableDataSource(this.alunos);
    }
  })
}



}
