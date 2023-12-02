import { ITeacher, Teacher } from "./Teacher";
import { IStudent,Student } from "./Student";

export interface ISubject {
  name: string;
  teacher: Teacher;
   Student: Student[]
}

export class Subject {
  id!:number;
  name: string;
  teacher: Teacher;

  constructor(subject: ISubject) {
    this.name = subject.name;
    this.teacher = subject.teacher;
  }
}
