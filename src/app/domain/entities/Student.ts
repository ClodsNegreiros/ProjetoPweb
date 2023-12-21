import { Grade } from "./Grade";
import { ISubject, Subject } from "./Subject";

export interface IStudent {
  id?:number;
  nome?: string;
  idade?: string;
  email?: string;
  subjects?: Subject[];
  grades?:Grade[];
  password?: string;
  telefone?:string;
  endereco?:string;
  instituicao?:string;
}

export class Student {
  id?:number;
  nome?: string;
  idade?: string;
  email?: string;
  subjects?: Subject[]
  grades?:Grade[]
  password?:string;
  telefone?:string;
  endereco?:string;
  instituicao?:string;

  constructor(student: IStudent={}) {
    this.nome = student.nome;
    this.idade = student.idade;
    this.email = student.email;
   this.subjects = student.subjects;
    this.password= student.password;
    this.telefone=student.telefone;
    this.endereco=student.endereco;
    this.instituicao=student.instituicao;
    this.grades=student.grades;
  }
}
