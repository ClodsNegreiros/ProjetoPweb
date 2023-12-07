import { ISubject, Subject } from 'src/app/domain/entities/Subject';
import { IStudent, Student } from "./Student";

export interface IGrade {
  id?:string;
  value: string;
  student: string;
  subject: string;
}

export class Grade {
  id?: string;
  value: string;
  studentemail: string;
  subjectname: string;

  constructor(id?: string,grade: Grade = {value: '', studentemail:'',subjectname:''}) {
    this.id = id;
    this.value = grade.value;
    this.subjectname =grade.subjectname;
    this.studentemail = grade.studentemail;
    }
    
}
