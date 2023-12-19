import { ITeacher, Teacher } from "./Teacher";
import { IStudent,Student } from "./Student";

export interface ISubject {
  id?:number
  nome?: string;
  teacher?: Teacher;
   students?: Student[]
}

export class Subject {
  id?:number;
  nome?: string;
  teacher?: Teacher;
  students?: Student[]=[]

  constructor(subject: ISubject) {
    this.id=subject.id;
    this.nome = subject.nome;
    this.teacher = subject.teacher;
    this.students=subject.students;
  }
}
