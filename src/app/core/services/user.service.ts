import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/domain/entities/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { 

  }

  UserEndpoint: string = 'http://localhost:3000/users';
  users: User[]=[];

  getusers(): Observable<User>{
    return this.httpclient.get<User>(this.UserEndpoint);
  }

  getuserbyid(id:number): Observable<User>{
    return this.httpclient.get<User>(`${this.UserEndpoint}/${id}`)
    }

  addeuser(user:User):Observable<User>{
     return this.httpclient.post<User>(this.UserEndpoint,user);
    }

  updateuser(user:User,id:number):Observable<User>{
    return this.httpclient.patch<User>(`${this.UserEndpoint}/${id}`,user);
  }

  deleteuser(id:number):Observable<User>{
    return this.httpclient.delete<User>(`${this.UserEndpoint}/${id}`);
  }

}
