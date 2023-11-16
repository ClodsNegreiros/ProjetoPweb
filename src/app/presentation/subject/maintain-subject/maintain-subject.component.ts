import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subject } from './../../../domain/entities/Subject';
import { Teacher } from 'src/app/domain/entities/Teacher';
import { TeacherService } from './../../../core/services/teacher.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectService } from 'src/app/core/services/subject.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maintain-subject',
  templateUrl: './maintain-subject.component.html',
  styleUrls: ['./maintain-subject.component.css']
})
export class MaintainSubjectComponent {

  teachers: Teacher[] = [];

  subjectForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _teacherService: TeacherService,
    private _snackBar: MatSnackBar,
    private _subjectService: SubjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.subjectForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      teacher: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.teachers = this._teacherService.getTeachers();
  }

  validateForm(): void {
    Object.keys(this.subjectForm.controls).forEach((controlKey) => {
      if (this.subjectForm.controls[controlKey].invalid) {
        this.subjectForm.controls[controlKey].markAsDirty();
      }
    });
  }

  async onSubmit(): Promise<void> {
    try {

      this.createSubject();
    } catch (error) {
      console.log(error)
    }
  }

  private async createSubject(): Promise<void> {
    this.validateForm();

    if (this.subjectForm.invalid) {
      return;
    }

    const { name, teacher } = this.subjectForm.value;

    const subject = new Subject({
      name: name,
      teacher: teacher
    })

    this._subjectService.addSubject(subject).subscribe((subject: Subject) => {
      this._snackBar.open(
        `A matéria foi cadastrada com sucesso.`,
        'Ok',
        {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 4000,
        }
      );
      this._router.navigate(['/subject', subject.id])
    },
    (error) => {
      this._snackBar.open(
        `Erro ao cadastrar matéria. Por favor tente novamente.`,
        'Ok',
        {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 4000,
        }
      );
    });
  }

  // private async updateSubject(): Promise<void> {
  //   this.validateForm();

  //   if (this.subjectForm.invalid) {
  //     return;
  //   }

  //   const { name, teacher } = this.subjectForm.value;

  //   const subject = new Subject({
  //     name: name,
  //     teacher: teacher
  //   })

  //   this._subjectService.addSubject(subject).subscribe((subject: Subject) => {
  //     this._snackBar.open(
  //       `A matéria foi cadastrada com sucesso.`,
  //       'Ok',
  //       {
  //         horizontalPosition: 'right',
  //         verticalPosition: 'top',
  //         duration: 4000,
  //       }
  //     );
  //     this._router.navigate(['/subject', subject.id])
  //   },
  //   (error) => {
  //     this._snackBar.open(
  //       `Erro ao cadastrar matéria. Por favor tente novamente.`,
  //       'Ok',
  //       {
  //         horizontalPosition: 'right',
  //         verticalPosition: 'top',
  //         duration: 4000,
  //       }
  //     );
  //   });
  // }
}
