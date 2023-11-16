import { ITeacher, Teacher } from "./Teacher";

export interface ISubject {
  id?: number;
  name: string;
  teacher: ITeacher;
  // Student: Student[]
}

export class Subject {
  id?: number;
  name?: string;
  teacher?: Teacher;

  constructor(subject?: ISubject) {
    this.id = subject?.id;
    this.name = subject?.name;
    this.teacher = subject?.teacher;
  }
}
