import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';
import { TeacherService } from './teacher.service';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private httpclient: HttpClient,
    private teacherservice: TeacherService,
    private studentservice: StudentService
  ) {}

  getStudentbyemail(email:string):Observable<Student[]>{
    return this.httpclient.get<Student[]>(`http://localhost:8080/students/byemail?email=${email}`)
  }

   getTeacherbyemail(email:string):Observable<Teacher[]>{
    return this.httpclient.get<Teacher[]>(`http://localhost:8080/teachers/byemail?email=${email}`)
  }

  getUserRole(email: string): Observable<string> {
    return this.studentservice.getStudentbyemail(email).pipe(
      map((student: Student[]) => {
        if (student.length > 0 && student as Student) {
          return 'student';
        } else {
          return 'teacher';
        }
      })
    );
  }
}
