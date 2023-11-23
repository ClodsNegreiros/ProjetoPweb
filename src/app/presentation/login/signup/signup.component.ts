import { Component } from '@angular/core';
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
export class SignupComponent {

  atores : string[]= ["Professor","Aluno"] 

  LoginForm: FormGroup;

  isEditMode: boolean = false;
  subjectId!: any;

  email: FormControl;
  password:FormControl;
  ator:FormControl;

  constructor(
    private _formBuilder: FormBuilder,
    private _userservice: UserService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password= new FormControl("",[Validators.required,Validators.minLength(6)])
    this.ator= new FormControl('', [Validators.required]);
    
    this.LoginForm= this._formBuilder.group({
      email: ['', this.email],
      password: ['', this.password],
      ator:['',this.ator]
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

  errormessage():string{
    if(this.LoginForm.hasError('required')){
      return 'Preencha o campo solicitado'
    }
    else if(this.LoginForm.hasError('minlenght')){
      return 'preencha ao menos 6 digitos na senha'
    }
    return ''
  }


  async onSubmit(): Promise<void> {
    const { email ,senha,ator}= this.LoginForm.value;
    const user= new User( {
      email: email,
      senha:senha,
      isaluno: ator==="aluno" ? true : false 
        }
      );
      window.alert(ator);
        this._userservice.addeuser(user).subscribe((user:User) => {
          this._snackBar.open(
            `o Usuário foi cadastrado com sucesso`,
            'Ok',
            {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: 4000,
            }
          );
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
