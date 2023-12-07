import { ISubject, Subject } from "./Subject";

export interface ITeacher {
  name?: string;
  email: string;
 // subject: ISubject[];
  password?:string;
}

export class Teacher {
  id?:number;
  name?: string;
  email: string;
  //subject: Subject[];
  password?:string

  constructor(teacher: ITeacher) {
    this.name = teacher.name;
    this.email = teacher.email;
   // this.subject = teacher.subject;
    this.password=teacher.password;
  }
}
