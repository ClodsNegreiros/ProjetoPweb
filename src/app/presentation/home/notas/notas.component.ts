import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotasService } from 'src/app/core/services/notas.service';
import { NotasFirebaseService } from 'src/app/core/services/notasfirebase.service';
import { Grade } from 'src/app/domain/entities/Grade';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';

export interface IGradeData{
  nota:string;
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


  constructor(private notasservico:NotasFirebaseService) {
    this.notas=[]
    this.dataSource = new MatTableDataSource();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
      this.notasservico.listar().subscribe(
        (grades:Grade[])=>{

         const user: Student = JSON.parse( window.localStorage.getItem('user') ?? '')
          console.log(grades);
          grades.map((grade:Grade)=>{
            if(user.email===grade.studentemail){
              this.notas.push({nota:grade.value,materia:grade.subjectname});
              this.dataSource= new MatTableDataSource(this.notas)
            }
          })
         this.dataSource=new MatTableDataSource(this.notas)
        }
      )
  }




}

