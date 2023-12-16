import { ISubject, Subject } from "./Subject";

export interface ITeacher {
  id?:number;
  nome?: string;
  email?: string;
  subject?: Subject;
  password?:string;
  telefone?:string;
  endereco?:string;
  instituicao?:string;
  idade?:string;
}

export class Teacher {
  id?:number;
  nome?: string;
  email?: string;
  subject?: Subject;
  password?:string;
  telefone?:string;
  endereco?:string;
  instituicao?:string;
  idade?:string;

  constructor(teacher: ITeacher) {
    this.id=teacher.id;
    this.nome = teacher.nome;
    this.email = teacher.email;
    this.subject = teacher.subject;
    this.password=teacher.password;
    this.telefone=teacher.telefone;
    this.endereco=teacher.endereco;
    this.instituicao=teacher.instituicao;
    this.idade=teacher.idade;
  }
}
