import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/core/services/user.service';
import { Student } from 'src/app/domain/entities/Student'
import { Teacher} from 'src/app/domain/entities/Teacher'
import { CustomEmailValidator } from 'src/app/core/validators/CustomEmailValidator';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  atores: string[] = ['Professor', 'Aluno'];

  LoginForm: FormGroup;

  isEditMode: boolean = false;
  subjectId!: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _teacherservice: TeacherService,
    private _studentservice : StudentService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.LoginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      ator: ['', Validators.required],
    }, {
      validators: [
        CustomEmailValidator.sameEmail()
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
    this.validateForm();

    if (this.LoginForm.invalid) {
      return;
    }

    console.log('3')
    const { email, password, ator } = this.LoginForm.value;
  
    const user= ator =="aluno" ? new Student({
      email:email,
      password:password
    }) : new Teacher({
      email:email,
      password:password
    });

    if(ator=='aluno'){
      this._studentservice.addStudent(user as Student).subscribe((user:Student)=>{
        
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
      else{
        this._teacherservice.addTeacher(user as Teacher).subscribe((user:Teacher)=>{
        
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


  }