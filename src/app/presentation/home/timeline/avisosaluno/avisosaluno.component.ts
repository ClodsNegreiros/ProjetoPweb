import { Component } from '@angular/core';
import { AvisoService } from 'src/app/core/services/aviso.service';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { Aviso } from 'src/app/domain/entities/Aviso';
import { Teacher } from 'src/app/domain/entities/Teacher';


interface IAviso{
  header:string;
  text:string;
  hora:string;
  professor:string;

}

@Component({
  selector: 'app-avisosaluno',
  templateUrl: './avisosaluno.component.html',
  styleUrls: ['./avisosaluno.component.css']
})
export class AvisosalunoComponent {
  teachersid:number[]=[]
  avisos: IAviso[]= []
  teachersnome: string[]=[]
  userlogged= JSON.parse(window.localStorage.getItem("user") ?? "")
  
  constructor(private avisosservice:AvisoService,private teacherservice:TeacherService){
  }
  
  ngOnInit(): void {
    this.teacherservice.getTeachersbysubjects(this.userlogged.subjects).subscribe((teachers: Teacher[]) => {
      this.teachersid = teachers.map(x => x.id!);
      this.teachersnome = teachers.map(x => x.nome!);
      this.avisosservice.getavisosbyteachers(this.teachersid).subscribe((avisos: Aviso[]) => {
        this.avisos = avisos.map(aviso => {
          console.log(aviso.teacher);
          const professorName = teachers.find(teacher => teacher.id! === aviso.teacher!)?.nome! || "Professor Desconhecido";
          return { header: aviso.header!, text: aviso.text!, hora: aviso.hora!, professor: professorName! };
        });
      });
    });
  }
  
}
