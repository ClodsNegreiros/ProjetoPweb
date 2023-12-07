import { ISubject, Subject } from "./Subject";

export interface IStudent {
  id?:number;
  name?: string;
  age?: number;
  email?: string;
  subjects?: string[];
  password?: string;
}

export class Student {
  id?:number;
  name?: string;
  age?: number;
  email?: string;
  subjects?: string[];
  password?:string;

  constructor(student: IStudent) {
    this.name = student.name;
    this.age = student.age;
    this.email = student.email;
   this.subjects = student.subjects;
    this.password= student.password;
  }
}
