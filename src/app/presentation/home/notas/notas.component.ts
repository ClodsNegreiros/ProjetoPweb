import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotasService } from 'src/app/core/services/notas.service';
import { Grade } from 'src/app/domain/entities/Grade';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';

export interface IGradeData{
  nota:number
  materia:string
}


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit{

  displayedColumns: string[] = ["Materia","Nota"];
  dataSource: MatTableDataSource<IGradeData>;
  userlogged:Teacher | Student =JSON.parse(window.localStorage.getItem("user")?? "");
  notas:IGradeData[];


  constructor(private notasservico:NotasService) {
    this.notas=[]
    this.dataSource = new MatTableDataSource();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
      this.notasservico.getGrades().subscribe(
        (grades:Grade[])=>{

          grades.filter((grade:Grade)=>{
            return grade.student.email==="joao.chaves@academico.ifpb.edu.br"
          })

          grades.map((grade:Grade)=>{
            this.notas.push({materia:grade.subject.name,nota:grade.value})
          })
         this.dataSource=new MatTableDataSource(this.notas)
        }
      )
  }




}

