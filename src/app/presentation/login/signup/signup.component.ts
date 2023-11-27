import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/domain/entities/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit{

  atores : string[]= ["Professor","Aluno"] 

  LoginForm: FormGroup;

  isEditMode: boolean = false;
  subjectId!: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _userservice: UserService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    
    this.LoginForm= this._formBuilder.group({
      email: ['',Validators.required],
      password: ['', Validators.required,Validators.minLength(6)],
      ator:['',Validators.required]
    });
   
  }

  ngOnInit(): void {

  }

  validateForm(): void{
    Object.keys(this.LoginForm.controls).forEach((controlKey) => {
      if (this.LoginForm.controls[controlKey].invalid) {
        this.LoginForm.controls[controlKey].markAsDirty();

      }
    })
  }






  async onSubmit(): Promise<void> {
    this.validateForm();
    if(this.LoginForm.invalid){
      return;
    }
    const { email ,password,ator}= this.LoginForm.value;
    const user= new User( {
      email: email,
      senha:password,
      isaluno: ator==="aluno" ? true : false 
        } 
      );
      console.log(password);
        this._userservice.addeuser(user).subscribe((user:User) => {
          this._snackBar.open(
            `o Usuário foi cadastrado com sucesso! Faça seu Login.`,
            'Ok',
            {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: 4000,
            }
          );
          this._router.navigate(['/login']);
        },
        (error) => {
          this._snackBar.open(
            `Erro ao cadastrar usuário. Por favor tente novamente.`,
            'Ok',
            {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: 4000,
            }
          );
        });
        
        
    }
}
