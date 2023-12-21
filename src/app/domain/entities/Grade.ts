import { ISubject, Subject } from 'src/app/domain/entities/Subject';
import { IStudent, Student } from "./Student";

export interface IGrade {
  id?:number;
  valor: number;
  student: number;
  subject: number;
}

export class Grade {
  id?: number;
  valor?: number;
  student?:number;
  subject?: number;

  constructor(grade:IGrade) {
    this.id=grade.id;
    this.valor = grade.valor;
    this.subject =grade.subject;
    this.student = grade.student;
    }
    
}
