import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotasService } from 'src/app/core/services/notas.service';
import { NotasFirebaseService } from 'src/app/core/services/notasfirebase.service';
import { SubjectService } from 'src/app/core/services/subject.service';
import { Grade } from 'src/app/domain/entities/Grade';
import { Student } from 'src/app/domain/entities/Student';
import { Subject } from 'src/app/domain/entities/Subject';
import { Teacher } from 'src/app/domain/entities/Teacher';

export interface IGradeData{
  nota:number;
  materia:string;
}


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit{

  displayedColumns: string[] = ["Materia","Nota"];
  dataSource: MatTableDataSource<IGradeData>=new MatTableDataSource();
  userlogged =JSON.parse(window.localStorage.getItem("user")?? "");
  notas:IGradeData[];


  constructor(private notasservico:NotasService,private subjectservice:SubjectService) {
    this.notas=[];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    console.log(this.userlogged.id);
    this.notasservico.findbystudent(this.userlogged.id).subscribe((grades:Grade[])=>{
    
    console.log(grades);
      for(let grade of grades){
        this.subjectservice.getSubjectById(grade.subject!).subscribe((subject:Subject)=>{
          this.notas.push({nota:grade.valor!, materia:subject.nome!})
        })
      }
    })
    console.log(this.dataSource= new MatTableDataSource(this.notas));
  }
}