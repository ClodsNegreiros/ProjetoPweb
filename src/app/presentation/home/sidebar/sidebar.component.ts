import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';

interface IUser{
  nome:string;
  password?:string;
  type:string;
  id?:number;
}
interface IloggedUser{
  menu1:string[];
  menu2:string[];
  menu3:string[];
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

userlogged?:IUser
actionsUser:IloggedUser;


constructor(private _router:Router,private _snackbar : MatSnackBar){
  this.userlogged={type:'',nome:''}
this.actionsUser={menu1:[],menu2:[],menu3:[]}
}


ngOnInit(): void {
    const user= JSON.parse(window.localStorage.getItem("user") ?? "" );
    console.log(user.type)
    if(user.type==="aluno"){
      this.userlogged={nome:user.nome,type:user.type};
      this.actionsUser= {menu1:["Notas","/home/notas"],menu2:["Desempenho","/home/desempenho"],menu3:["Turmas",'/home/turmas']}
    }
    else{
      this.userlogged={nome:user.nome,type:user.type};
      this.actionsUser= {menu1:["Cadastrar Avisos",'/home/cadastroavisos'],menu2:["Cadastrar Notas",'/home/cadastronotas'],menu3:["Meus Alunos",'/home/alunos']}
        }

    }


    logout(){
      
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        this._router.navigate(["/"])
        this._snackbar.open(
          `Sessão encerrada com sucesso!`,
          'Ok',
          {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 4000,
          }
        )
      }
  


}
