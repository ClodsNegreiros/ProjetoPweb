import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade } from 'src/app/domain/entities/Grade';
@Injectable({
  providedIn: 'root'
})
export class NotasService {

  endpoint:string = "http://localhost:8080/grades"

  constructor(private httpclient:HttpClient) { }

  addGrade(grade:Grade):Observable<Grade>{
    return this.httpclient.post<Grade>(this.endpoint,grade)
  }

  getGrades():Observable<Grade[]>{
    return this.httpclient.get<Grade[]>(this.endpoint);
  }

  getGrade(id:number):Observable<Grade>{
    return this.httpclient.get<Grade>(`${this.endpoint}/${id}`)
  }

  deletegrade(id:number):Observable<Grade>{
    return this.httpclient.delete<Grade>(`${this.endpoint}/${id}`)
  }

  editgrade(grade:Grade,id:number):Observable<Grade>{
    return this.httpclient.put<Grade>(`${this.endpoint}/${id}`,grade)
  }


}
