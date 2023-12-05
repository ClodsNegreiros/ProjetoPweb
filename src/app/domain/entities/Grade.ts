import { ISubject, Subject } from 'src/app/domain/entities/Subject';
import { IStudent, Student } from "./Student";

export interface IGrade {
  id?:string;
  value: string;
  student: Student;
  subject: Subject;
}

export class Grade {
  id?: string;
  value: string;
  student: Student;
  subject: Subject;

  constructor(id?: string,grade: Grade = {value: '', student: {name:""},subject:{name:""}}) {
    this.id = id;
    this.value = grade.value;
    this.subject =grade.subject;
    this.student = grade.student;
    }
    
}
