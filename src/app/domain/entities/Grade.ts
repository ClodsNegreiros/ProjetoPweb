import { ISubject, Subject } from 'src/app/domain/entities/Subject';
import { IStudent, Student } from "./Student";

export interface IGrade {
  id?:number;
  valor: string;
  student: string;
  subject: string;
}

export class Grade {
  id?: number;
  valor?: string;
  student?:Student;
  subject?: Subject;

  constructor(grade: Grade = {valor: '', student:{},subject:{}}) {
    this.valor = grade.valor;
    this.subject =grade.subject;
    this.student = grade.student;
    }
    
}
