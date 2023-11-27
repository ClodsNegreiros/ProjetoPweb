import { Injectable } from '@angular/core';
import { User } from 'src/app/domain/entities/User';
import { UserService } from './user.service';
import {Router} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isauth:boolean=false
  

  constructor(private _userservice:UserService,private _router: Router) { }

isauthenticaded():boolean{
  return this.isauth
}

CanAuth(email:string,senha:string):Observable<boolean>{
  this._userservice.getuserbyemail(email).subscribe(
  (user:User)=>{
    if(user.senha===senha){
      console.log("oioi")
      const bool=this.login();
      this._router.navigate(["/home"])
      return bool;
    }
    else{
      this._router.navigate(["/login"]);
      return false;
    }
  },(error)=>{
    this._router.navigate(["/login"]);
    return false;
        }
      );
      return of(false);
  }





login() : boolean{
  return this.isauth=true;
}

logout() : boolean{
 return  this.isauth=false;
}

}
