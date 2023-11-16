import { ISubject, Subject } from 'src/app/domain/entities/Subject';
import { IStudent, Student } from "./Student";

export interface IGrade {
  id: number;
  value: number;
  student: IStudent;
  subject: ISubject;
}

export class Grade {
  id: number;
  value: number;
  student: Student;
  subject: Subject;

  constructor(grade: IGrade){
    this.id = grade.id;
    this.value = grade.value;
    this.student = grade.student;
    this.subject = grade.subject;
  }
}
