import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NotasService } from 'src/app/core/services/notas.service';
import { NotasFirebaseService } from 'src/app/core/services/notasfirebase.service';
import { Grade } from 'src/app/domain/entities/Grade';

@Component({
  selector: 'app-maintain-notas',
  templateUrl: './maintain-notas.component.html',
  styleUrls: ['./maintain-notas.component.css']
})
export class MaintainNotasComponent implements OnInit {
grade!:Grade;
gradeid!:any
gradeeditform : FormGroup

constructor(private formbuilder:FormBuilder, private snackbar: MatSnackBar,private route:ActivatedRoute,private notasservico:NotasService,private router:Router){
  this.gradeeditform=this.formbuilder.group({
    nota: ["",Validators.required]
  })
}

ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.gradeid=params['id'] ? params['id']: null;
      this.notasservico.getGrade(this.gradeid).subscribe((grade:Grade)=>{
        this.grade=grade;
      })
    })

  }


OnSubmit(){
  if(this.gradeeditform.invalid){
    return
  }
  const {nota}= this.gradeeditform.value;

}

}
