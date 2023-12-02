import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { TeacherService } from './teacher.service';
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

  
  CanAuth(email: string, password: string,typeuser:string): Observable<boolean> {
  if(typeuser=="aluno"){
    return this._userservice.getStudentbyemail(email).pipe(
      map((students: Student[]) => {
        this._logged = students[0];
        if(this._logged.password===password){
          window.localStorage.setItem("token","JBHFJLAPSI");
          
          window.localStorage.setItem("user",JSON.stringify(this._logged));
          return true;
        }
        else{
          return false;
        }
      }),
      catchError((error) => {
       // console.error('Erro ao autenticar:', error);
        return of(false);
      })
    );
  }
  else{
    return this._userservice.getTeacherbyemail(email).pipe(
      map((teachers: Teacher[]) => {
        this._logged = teachers[0];
        if(this._logged.password===password){
          window.localStorage.setItem("token","JBHFJLAPSI");
          
          window.localStorage.setItem("user",JSON.stringify(this._logged));
          return true;
        }
        else{
          return false;
        }
      }),
      catchError((error) => {
       // console.error('Erro ao autenticar:', error);
        return of(false);
      })
    );
  }
  }
  

  login(){
    this.isauth = true;
  }

  logout() {
  this.isauth = false;
  }

}
