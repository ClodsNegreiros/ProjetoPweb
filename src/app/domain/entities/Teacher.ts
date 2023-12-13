import { ISubject, Subject } from "./Subject";

export interface ITeacher {
  id?:number;
  name?: string;
  email?: string;
 // subject: ISubject[];
  password?:string;
  telefone?:string;
  endereco?:string;
  instituicao?:string;
  age?:string;
}

export class Teacher {
  id?:number;
  name?: string;
  email?: string;
  //subject: Subject[];
  password?:string;
  telefone?:string;
  endereco?:string;
  instituicao?:string;
  age?:string;

  constructor(teacher: ITeacher) {
    this.id=teacher.id;
    this.name = teacher.name;
    this.email = teacher.email;
   // this.subject = teacher.subject;
    this.password=teacher.password;
    this.telefone=teacher.telefone;
    this.endereco=teacher.endereco;
    this.instituicao=teacher.instituicao;
    this.age=teacher.age;
  }
}
