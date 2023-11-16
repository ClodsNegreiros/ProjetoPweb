import { ISubject, Subject } from "./Subject";

export interface IStudent {
  id: number;
  name: string;
  age: number;
  email: string;
  subjects: ISubject[];
}

export class Student {
  id: number;
  name: string;
  age: number;
  email: string;
  subjects: Subject[];

  constructor(student: IStudent) {
    this.id = student.id;
    this.name = student.name;
    this.age = student.age;
    this.email = student.email;
    this.subjects = student.subjects
  }
}
