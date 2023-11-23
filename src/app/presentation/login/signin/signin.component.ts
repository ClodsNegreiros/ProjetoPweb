import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/domain/entities/User';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  standalone: false,
})
export class SigninComponent {

  LoginForm: FormGroup;

  isEditMode: boolean = false;
  subjectId!: any;

  email: FormControl;
  password:FormControl;

  constructor(
    private _formBuilder: FormBuilder,
    private _userservice: UserService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password= new FormControl("",[Validators.required,Validators.minLength(6)])
    this.LoginForm= this._formBuilder.group({
      email: ['', this.email],
      password: ['', this.password]
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
    const { email ,senha}= this.LoginForm.value;
    const user= new User( {
      email: email,
      senha:senha
        }
      );
        this._userservice.addeuser(user);
  }

  

 

  

}
