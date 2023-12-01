import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface IGradeData{
  nota:number
  materia:string
}




const grades : IGradeData[]=[
  {materia:"PWEB",nota:10},
  {materia:"POB",nota:10},
  {materia:"SD",nota:10},
  {materia:"PWEB",nota:10},
  {materia:"POB",nota:10},
  {materia:"ETICA",nota:10},
  {materia:"PROBABILIDADE",nota:10}

]

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {

  displayedColumns: string[] = ["Materia","Nota"];
  dataSource: MatTableDataSource<IGradeData>;


  constructor() {
    this.dataSource = new MatTableDataSource(grades);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

