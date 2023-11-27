import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/domain/entities/User';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  standalone: false,
})
export class SigninComponent implements OnInit {

  LoginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _Authservice: AuthService,
    private _router: Router,
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



   async onSubmit():Promise<void>{
    this.validateForm()
    if(this.LoginForm.invalid){
      return
    }

    const { email ,password}= this.LoginForm.value;
      
    if (this._Authservice.CanAuth(email,password)){
      this._router.navigate(['/home']);
        }
    }



}
