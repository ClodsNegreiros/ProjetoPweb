import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { UserService } from 'src/app/core/services/user.service';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LoginForm: FormGroup;
  auth?: boolean;
  _logged?: Student | Teacher;

  constructor(
    private _formBuilder: FormBuilder,
    private _AuthService: AuthService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _teacherService: TeacherService,
    private _userService: UserService
  ) {
    this.LoginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  validateForm(): void {
    Object.keys(this.LoginForm.controls).forEach((controlKey) => {
      if (this.LoginForm.controls[controlKey].invalid) {
        this.LoginForm.controls[controlKey].markAsDirty();
      }
    });
  }

  async onSubmit() {
    try {
      this.validateForm();

      if (this.LoginForm.invalid) {
        return;
      }

      const { email, password } = this.LoginForm.value;
      const userRole = await this.verifyUserRole(email);

      if (userRole === 'teacher') {
        const isAuthenticated = await this._AuthService.canAuthTeacher(email, password).toPromise();
        if (!isAuthenticated) {
          throw new Error('Erro ao tentar autenticar professor.');
        }
      } else {
        const isAuthenticated = await this._AuthService.canAuthStudent(email, password).toPromise();
        if (!isAuthenticated) {
          throw new Error('Erro ao tentar autenticar estudante.');
        }
      }

      this._router.navigate(['/home']);
    } catch (error) {
      this._snackBar.open(
        `Senha/email incorreto. Por favor, tente novamente.`,
        'Ok',
        {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 4000,
        }
      );
      console.error('Erro ao autenticar:', error);
    }
  }

  async verifyUserRole(email: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._userService.getUserRole(email).subscribe((userRole) => {
        resolve(userRole);
      }, (error) => {
        reject(error);
      });
    });
  }
}
