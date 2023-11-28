import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LoginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _Authservice: AuthService,
    private _router: Router
  ) {
    this.LoginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  validateForm(): void {
    Object.keys(this.LoginForm.controls).forEach((controlKey) => {
      if (this.LoginForm.controls[controlKey].invalid) {
        this.LoginForm.controls[controlKey].markAsDirty();
      }
    });
  }

  async onSubmit(): Promise<void> {
    this.validateForm();
    if (this.LoginForm.invalid) {
      return;
    }

    const { email, password } = this.LoginForm.value;

    if (this._Authservice.CanAuth(email, password)) {
      this._router.navigate(['/home']);
    }
  }
}
