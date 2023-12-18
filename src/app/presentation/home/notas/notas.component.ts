import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotasService } from 'src/app/core/services/notas.service';
import { NotasFirebaseService } from 'src/app/core/services/notasfirebase.service';
import { Grade } from 'src/app/domain/entities/Grade';
import { Student } from 'src/app/domain/entities/Student';
import { Subject } from 'src/app/domain/entities/Subject';
import { Teacher } from 'src/app/domain/entities/Teacher';

export interface IGradeData{
  nota?:string;
  materia?:Subject;
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
      this.notasservico.findbystudent(Number(this.userlogged.id)).subscribe((grades:Grade[])=>{
        
        grades.map((grade:Grade)=>{
          this.notas.push({nota:grade.valor,materia:grade.subject})
        })
      })
  }




}

