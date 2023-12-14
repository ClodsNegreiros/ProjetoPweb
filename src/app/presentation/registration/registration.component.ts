import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { UserService } from 'src/app/core/services/user.service';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';
// import { CustomEmailValidator } from 'src/app/core/validators/CustomEmailValidator';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { StudentService } from 'src/app/core/services/student.service';
import { CustomPasswordValidator } from 'src/app/core/validators/CustomPasswordValidator';
import { CustomEmailValidator } from 'src/app/core/validators/CustomEmailValidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  atores: string[] = ['Professor', 'Aluno'];

  LoginForm: FormGroup;

  isEditMode: boolean = false;
  subjectId!: any;
  passwordVisibility: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _teacherservice: TeacherService,
    private _studentservice: StudentService,
    private _snackBar: MatSnackBar,
    private _router: Router,
  ) {
    this.LoginForm = this._formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        // confirmEmail: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        // confirmPassword: ['', [Validators.required]],
        ator: ['', Validators.required],
      }, {
        validators: [
          CustomEmailValidator.sameEmail(),
          CustomPasswordValidator.samePassword(),
        ]
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
    try {
      if (this.LoginForm.value.ator == 'professor') {
        this.teacherRegistration();
        return
      }

      this.studentRegistration();
    } catch (error) {
      console.log(error);
    }
  }

  async teacherRegistration(): Promise<void> {
    this.validateForm();

    if (this.LoginForm.invalid) {
      return;
    }

    const { email, password } = this.LoginForm.value;

    const user = new Teacher({
      email: email,
      password: password,
    });

    console.log(user);
    this._teacherservice.addTeacher(user as Teacher).subscribe(
      (user: Teacher) => {
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
        window.localStorage.setItem("user",JSON.stringify({...user,type:"professor"}))
        this._router.navigate(['/registration/account-settings']);
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

  async studentRegistration(): Promise<void> {
    this.validateForm();

    if (this.LoginForm.invalid) {
      return;
    }

    const { email, password } = this.LoginForm.value;

    const user = new Student({
      email: email,
      password: password
    });

    this._studentservice.addStudent(user as Student).subscribe(
      (user: Student) => {
        this._snackBar.open(
          `o Usuário foi cadastrado com sucesso! Preencha suas informações`,
          'Ok',
          {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 4000,
          }
        );
        window.localStorage.setItem("user",JSON.stringify({...user,type:"aluno"}))
        this._router.navigate(['/registration/account-settings']);
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

  togglePasswordType(): void {
    this.passwordVisibility = !this.passwordVisibility;
  }
}
