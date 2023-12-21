import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/domain/entities/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

 

  TeacherEndpoint: string = 'http://localhost:8080/teachers';

  teachers: Teacher[] = [];
  //private nextId: number = 1;

  constructor(
    private httpClient: HttpClient,
  ) {}

  getTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.TeacherEndpoint);
  }


  addTeacher(Teacher: Teacher): Observable<Teacher> {
    return this.httpClient.post<Teacher>(this.TeacherEndpoint, Teacher);
  }

  deleteTeacher(TeacherId: number | undefined): Observable<Object> {
    return this.httpClient.delete(`${this.TeacherEndpoint}/${TeacherId}`);
  }

  getTeacherById(TeacherId: number): Observable<Teacher> {
    return this.httpClient.get<Teacher>(`${this.TeacherEndpoint}/${TeacherId}`)
  }

  editTeacher(Teacher: Teacher, idTeacher:number): Observable<Teacher> {
    return this.httpClient.put<Teacher>(`${this.TeacherEndpoint}/${idTeacher}`, Teacher)
  }

  getTeacherbyemail(email:string):Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(`${this.TeacherEndpoint}/byemail?email=${email}`);
  }

}
