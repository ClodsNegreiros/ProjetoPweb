import { Injectable } from '@angular/core';
import { User } from 'src/app/domain/entities/User';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isauth: boolean = false;
  _logged?: User;


  constructor(private _userservice: UserService, private _router: Router) { }

  isauthenticaded(): boolean {
    return this.isauth
  }

  
  CanAuth(email: string, password: string): Observable<boolean> {
    return this._userservice.getuserbyemail(email).pipe(
      map((users: User[]) => {
        this._logged = users[0];
        if(this._logged.senha===password){
          window.localStorage.setItem("token","JBHFJLAPSI");
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
  

  login(){
    this.isauth = true;
  }

  logout() {
  this.isauth = false;
  }

}
