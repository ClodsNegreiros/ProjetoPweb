import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';

@Component({
  selector: 'app-signinteacher',
  templateUrl: './signinteacher.component.html',
  styleUrls: ['./signinteacher.component.css']
})
export class SigninteacherComponent {
  LoginForm: FormGroup;
  auth?:boolean;
  _logged?:Student | Teacher;

  constructor(
    private _formBuilder: FormBuilder,
    private _AuthService: AuthService,
    private _router: Router,private _snackBar: MatSnackBar
  ) {
    this.LoginForm= this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
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



   async onSubmit(){

    this.validateForm();
    if(this.LoginForm.invalid){
      return;
    }

    const {email,password} = this.LoginForm.value;

    try {
      const isAuthenticated = await this._AuthService.CanAuth(email, password,"professor").toPromise();
  
      if (isAuthenticated) {
        this._router.navigate(['/home']);
      } else {
        this._snackBar.open(
          `Senha/email incorreto. Por favor, tente novamente.`,
          'Ok',
          {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 4000,
          }
        );
      }
    } catch (error) {
      console.error('Erro ao autenticar:', error);
    }
  }

}
