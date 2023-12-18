import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/domain/entities/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  StudentEndpoint: string = 'http://localhost:8080/students';

  Students: Student[] = [];
  //private nextId: number = 1;

  constructor(
    private httpClient: HttpClient,
  ) {}

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.StudentEndpoint);
  }


  addStudent(Student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.StudentEndpoint, Student);
  }

  deleteStudent(StudentId: number | undefined): Observable<Object> {
    return this.httpClient.delete(`${this.StudentEndpoint}/${StudentId}`);
  }

  getStudentById(StudentId: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.StudentEndpoint}/${StudentId}`)
  }

  editStudent(student: Student, idStudent:number): Observable<Student> {
    return this.httpClient.put<Student>(`${this.StudentEndpoint}/${idStudent}`, student)
  }

  getStudentbyemail(email:string):Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.StudentEndpoint}/byemail?email=${email}`);
  }

  inseremateria(student:string, materia: string) :Observable<Object>{
   return  this.httpClient.put<Student>(`${this.StudentEndpoint}/addsubject?idstudent=${student}&idsubject=${materia}`,{});
  }

}
