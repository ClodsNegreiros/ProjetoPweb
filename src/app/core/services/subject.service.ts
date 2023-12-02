import { TeacherService } from './teacher.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Subject } from './../../domain/entities/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjectEndpoint: string = 'http://localhost:3000/subjects';

  subjects: Subject[] = [];
  //private nextId: number = 1;

  constructor(
    private httpClient: HttpClient,
  ) {}

  getSubjects(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.subjectEndpoint);
  }


  addSubject(subject: Subject): Observable<Subject> {
    return this.httpClient.post<Subject>(this.subjectEndpoint, subject);
  }

  deleteSubject(subjectId: number | undefined): Observable<Object> {
    return this.httpClient.delete(`${this.subjectEndpoint}/${subjectId}`);
  }

  getSubjectById(subjectId: number): Observable<Subject> {
    return this.httpClient.get<Subject>(`${this.subjectEndpoint}/${subjectId}`)
  }

  editSubject(subject: Subject, idsubject:number): Observable<Subject> {
    return this.httpClient.put<Subject>(`${this.subjectEndpoint}/${idsubject}`, subject)
  }
}
