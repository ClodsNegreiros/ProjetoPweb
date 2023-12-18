import { ITeacher, Teacher } from "./Teacher";
import { IStudent,Student } from "./Student";

export interface ISubject {
  id?:number
  nome?: string;
  teacher?: Teacher;
   student?: Student[]
}

export class Subject {
  id?:number;
  nome?: string;
  teacher?: Teacher;
  student?: Student[]=[]

  constructor(subject: ISubject) {
    this.id=subject.id;
    this.nome = subject.nome;
    this.teacher = subject.teacher;
    this.student=subject.student;
  }
}
