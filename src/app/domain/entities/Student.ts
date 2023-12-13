import { ISubject, Subject } from "./Subject";

export interface IStudent {
  id?:number;
  name?: string;
  age?: string;
  email?: string;
  subjects: string[];
  password?: string;
  telefone?:string;
  endereco?:string;
  instituicao?:string;
}

export class Student {
  id?:number;
  name?: string;
  age?: string;
  email?: string;
  subjects: string[];
  password?:string;
  telefone?:string;
  endereco?:string;
  instituicao?:string;

  constructor(student: IStudent) {
    this.name = student.name;
    this.age = student.age;
    this.email = student.email;
   this.subjects = student.subjects;
    this.password= student.password;
    this.telefone=student.telefone;
    this.endereco=student.endereco;
    this.instituicao=student.instituicao;
  }
}
