import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AvisoService } from 'src/app/core/services/aviso.service';
import { Aviso } from 'src/app/domain/entities/Aviso';



@Component({
  selector: 'app-cadastroavisos',
  templateUrl: './cadastroavisos.component.html',
  styleUrls: ['./cadastroavisos.component.css']
})
export class CadastroavisosComponent{

nometeacher:string=JSON.parse(window.localStorage.getItem('user') ?? '').email;;

FormAviso:FormGroup;

constructor(private formbuilder:FormBuilder,private snackbar:MatSnackBar,private avisoservice: AvisoService){
  this.FormAviso= this.formbuilder.group({
    "teacher":[this.nometeacher,Validators.required],
    "header":["",Validators.required],
    "text":["",Validators.required]
    }
  );
}



checkvalidility(){
 Object.keys(this.FormAviso.controls).forEach(controlkey=>{
  if(this.FormAviso.controls[controlkey].invalid){
    this.FormAviso.controls[controlkey].markAsDirty;
  }
 })
}

async OnSubmit(){
  this.checkvalidility();

  if(!this.FormAviso.invalid){
    const {teacher,header,text}= this.FormAviso.value;

    const aviso:Aviso= new Aviso({teacher:teacher,
    header:header,
    text:text});

    this.avisoservice.addaviso(aviso).subscribe(()=>{
      this.snackbar.open(
        `Aviso cadastrado com sucesso!`,
        'Ok',
        {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 4000,
        }
      );
      this.FormAviso.controls["header"].reset();
      this.FormAviso.controls["text"].reset();
      this.FormAviso.markAsPending();
    },
    ()=>{
      this.snackbar.open(
        `Erro no cadastro do Aviso. Tente Novamente!`,
        'Ok',
        {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 4000,
        }
      );
    })
  }
}

}
