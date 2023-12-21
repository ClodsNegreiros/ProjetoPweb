import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';


interface IUser{
  email:string;
  password?:string;
  type:string;
  id?:number;
}
interface Itabs{
  tab1:string[],
  tab2:string[],
  tab3:string[]
}


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
type =  JSON.parse(window.localStorage.getItem("user")?? "").type
userlogged?:IUser;
tabs?:Itabs

constructor(){
  this.userlogged={type:'',email:''}
  this.tabs=this.tabs={tab1:[],tab2:[],tab3:[]}
}

  ngOnInit(): void {
      const user =  JSON.parse(window.localStorage.getItem('user') ?? "");
      if(user.type==='aluno'){
        this.userlogged={...user};
        this.tabs={tab1:["Avisos"],tab2:["Horário"],tab3:["Faltas"]}
      }
      else{
        this.userlogged={...user};
        this.tabs={tab1:["Desempenho da Turma"],tab2:["Horário"],tab3:["Meus avisos"]}
      }
  }

}
