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
  private nextId: number = 1;

  constructor(
    private httpClient: HttpClient,
  ) {}

  getSubjects(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.subjectEndpoint);
  }

  getSubject(subjectId: number) {
    this.getSubjects().pipe(
      map((subjects) => subjects.find(subject => subject.id === subjectId))
    );
  }

  private generateId(): any {
    this.getSubjects().pipe(
      map((subjects) => {
        const maxId = subjects.reduce((max, subject) => {
          if (subject && subject.id !== undefined) {
            return subject.id > max ? subject.id : max;
          }
          return max;
        }, 0);

        return (maxId || 0) + 1;
      })
    );
  }

  addSubject(subject: Subject): Observable<Subject> {
    const subjectToAdd: Subject = {...subject, id: this.generateId()};
    return this.httpClient.post<Subject>(this.subjectEndpoint, subjectToAdd)
  }

  deleteSubject(subjectId: number | undefined): Observable<Object> {
    return this.httpClient.delete(`${this.subjectEndpoint}/${subjectId}`);
  }

  searchSubjectById(subjectId: number): Observable<Subject> {
    return this.httpClient.get<Subject>(`${this.subjectEndpoint}/${subjectId}`)
  }

  editSubject(subject: Subject): Observable<Subject> {
    return this.httpClient.put<Subject>(`${this.subjectEndpoint}/${subject.id}`, subject)
  }
}
