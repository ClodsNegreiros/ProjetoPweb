import { Component } from '@angular/core';



export interface ICalendar {
  day: string;
  Materia:string;
  Materia2:String;
  Materia3:string;
}


const calendario: ICalendar[]=[
  {day:"seg",Materia:"Pweb",Materia2:"Pweb",Materia3:"Pweb"},
  {day:"ter",Materia:"Pweb",Materia2:"Pweb",Materia3:"Pweb"},
  {day:"qua",Materia:"Pweb",Materia2:"Pweb",Materia3:"Pweb"},
  {day:"qui",Materia:"Pweb",Materia2:"Pweb",Materia3:"Pweb"},
  {day:"sex",Materia:"Pweb",Materia2:"Pweb",Materia3:"Pweb"}
]
@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent {
displayedColumns:string[]=['Dia', '13h-14h:40', '15h', '16h'];
dataSource=calendario;

}
