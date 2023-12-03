import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/domain/entities/User';
import { CustomEmailValidator } from 'src/app/core/validators/CustomEmailValidator';
import { CustomPasswordValidator } from 'src/app/core/validators/CustomPasswordValidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  atores: string[] = ['Professor', 'Aluno'];
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _userservice: UserService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      ator: ['', Validators.required],
    },
    {
      validators: [
        CustomEmailValidator.sameEmail(),
        CustomPasswordValidator.samePassword()
      ],
    });
  }

  ngOnInit(): void {}

  validateForm(): void {
    Object.keys(this.loginForm.controls).forEach((controlKey) => {
      if (this.loginForm.controls[controlKey].invalid) {
        this.loginForm.controls[controlKey].markAsDirty();
      }
    });
  }

  async onSubmit(): Promise<void> {
    this.validateForm();

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password, ator } = this.loginForm.value;
    const user = new User({
      email: email,
      senha: password,
      isaluno: ator === 'aluno' ? true : false,
    });

    this._userservice.addeuser(user).subscribe(
      (user: User) => {
        console.log(user);
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
      }
    );
  }
}
