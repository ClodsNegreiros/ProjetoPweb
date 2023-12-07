import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isauth: boolean = false;
  _logged?: Student | Teacher;


  constructor(private _userservice: UserService, private _router: Router) { }

  isauthenticaded(): boolean {
    return this.isauth
  }

  canAuthTeacher(email: string, password: string, typeUser?: string): Observable<boolean> {
    return this._userservice.getTeacherbyemail(email).pipe(
      map((teachers: Teacher[]) => {
        this._logged = teachers[0];

        if (this._logged.password === password) {
          window.localStorage.setItem("token","JBHFJLAPSI");
          window.localStorage.setItem("user",JSON.stringify({...this._logged,type:"professor"}));
          return true;
        }
        return false
      }),
      catchError((error) => {
        return of(false);
      })
    );
  }

  canAuthStudent(email: string, password: string,typeuser?:string): Observable<boolean> {
    return this._userservice.getStudentbyemail(email).pipe(
      map((students: Student[]) => {
        this._logged = students[0];

        if (this._logged.password === password) {
          window.localStorage.setItem("token","JBHFJLAPSI");
          window.localStorage.setItem("user",JSON.stringify({...this._logged,type:"aluno"}));
          return true;
        }
        return false;
      }),
      catchError((error) => {
      // console.error('Erro ao autenticar:', error);
        return of(false);
      })
    )
  }

  login(){
    this.isauth = true;
  }

  logout() {
    this.isauth = false;
  }
}
