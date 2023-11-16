import { ISubject, Subject } from "./Subject";

export interface ITeacher {
  id: number;
  name: string;
  email: string;
  subject?: ISubject[];
}

export class Teacher {
  id: number;
  name: string;
  email: string;
  subject?: Subject[];

  constructor(teacher: ITeacher) {
    this.id = teacher.id;
    this.name = teacher.name;
    this.email = teacher.email;
    this.subject = teacher.subject
  }
}
