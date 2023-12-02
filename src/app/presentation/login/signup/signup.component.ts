import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/core/services/student.service';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { UserService } from 'src/app/core/services/user.service';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';

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
    private _studentservice: StudentService,
    private _teacherservice:TeacherService,
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
    const user= ator =="aluno" ? new Student({
      name:"João Marcos",
      age:20,
      email:email,
      password:password
    }) : new Teacher({
      name:"João Marcos",
      email:email,
      password:password
    });
  if(ator=="aluno"){
        this._studentservice.addStudent(user as Student).subscribe((user: Student) => {
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
          this._teacherservice.addTeacher(user as Teacher).subscribe((user:Teacher) => {
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
