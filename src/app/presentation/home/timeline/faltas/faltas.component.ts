import { Component } from '@angular/core';



export interface IFaltas {
  Materia:string;
  Presenca:string;
  Faltas:number;
}


const calendario: IFaltas[]=[
  {Materia:"Pweb",Presenca:"80%",Faltas:7},{Materia:"Pweb",Presenca:"80%",Faltas:7},{Materia:"Pweb",Presenca:"80%",Faltas:7},{Materia:"Pweb",Presenca:"80%",Faltas:7},{Materia:"Pweb",Presenca:"80%",Faltas:7}
]
@Component({
  selector: 'app-faltas',
  templateUrl: './faltas.component.html',
  styleUrls: ['./faltas.component.css']
})
export class FaltasComponent {
  displayedColumns:string[]=['Disciplina', 'Presenca','Faltas'];
  dataSource=calendario;
}
