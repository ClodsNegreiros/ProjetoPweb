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

  isEditMode: boolean = false;
  subjectId!: any;

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
    this.checkEditMode();
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
      if (this.isEditMode) {
        this.updateSubject();
      } else {
        this.createSubject();
      }
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

  private async updateSubject(): Promise<void> {
    this.validateForm();

  if (this.subjectForm.invalid) {
    return;
  }

  const { name, teacher } = this.subjectForm.value;

  const updatedSubject = new Subject({
    id: this.subjectId,
    name: name,
    teacher: teacher
  });

  this._subjectService.editSubject(updatedSubject).subscribe(
    (subject: Subject) => {
      this._snackBar.open(
        `A matéria foi atualizada com sucesso.`,
        'Ok',
        {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 4000,
        }
      );
      // Aqui você pode navegar para a página de detalhes ou fazer outra ação necessária
      this._router.navigate(['/subject', subject.id]);
    },
    (error) => {
      this._snackBar.open(
        `Erro ao atualizar a matéria. Por favor, tente novamente.`,
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

  private checkEditMode(): void {
    this._route.params.subscribe((params) => {
      this.subjectId = params['id'] ? parseInt(params['id']) : null;
      this.isEditMode = this.subjectId !== null;

      if (this.isEditMode) {
        // Carregue os dados do Subject para edição.
        this.loadSubjectData();
      }
    });
  }

  private loadSubjectData(): void {
    if (this.subjectId !== null) {
      this._subjectService.searchSubjectById(this.subjectId).subscribe((subject: Subject) => {
        this.subjectForm.patchValue({
          name: subject.name,
          teacher: subject.teacher
        });
      });
    }
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
  //   })
  // }
}
