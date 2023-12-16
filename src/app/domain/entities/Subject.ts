import { ITeacher, Teacher } from "./Teacher";
import { IStudent,Student } from "./Student";

export interface ISubject {
  name?: string;
  teacher?: Teacher;
   student?: Student[]
}

export class Subject {
  id?:number;
  name?: string;
  teacher?: Teacher;
  student?: Student[]=[]

  constructor(subject: ISubject) {
    this.name = subject.name;
    this.teacher = subject.teacher;
    this.student=subject.student;
  }
}
