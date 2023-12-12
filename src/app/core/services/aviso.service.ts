import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aviso } from 'src/app/domain/entities/Aviso';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {

  avisoendpoint='http://localhost:3000/avisos';

  constructor(private httpclient:HttpClient) { }

  getavisos():Observable<Aviso[]>{
    return this.httpclient.get<Aviso[]>(this.avisoendpoint);
  }

  getavisobyid(id:string):Observable<Aviso>{
    return this.httpclient.get<Aviso>(`${this.avisoendpoint}/${id}`)
  }

  addaviso(aviso:Aviso):Observable<Aviso>{

    const  hora:string= new Date().getHours().toString()
    const  minuto:string= new Date().getMinutes().toString()
    const  segundos:string= new Date().getSeconds().toString();
    const tempo= `${hora}:${minuto}:${segundos}`
    const newaviso:Aviso= new Aviso({header:aviso.header,text:aviso.text,teacher:aviso.teacher,hora:tempo});
    return this.httpclient.post<Aviso>(this.avisoendpoint,newaviso);
  }

  deleteaviso(id:string):Observable<Aviso>{
    return this.httpclient.delete<Aviso>(`${this.avisoendpoint}/${id}`)
  }

  editaviso(aviso:Aviso,id:string):Observable<Aviso>{
    return this.httpclient.put<Aviso>(`${this.avisoendpoint}/${id}`,aviso);
  }

}
