import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IMenuActions } from 'src/app/core/components/menu/menu.component';
import { SubjectService } from 'src/app/core/services/subject.service';
import { Subject } from 'src/app/domain/entities/Subject';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent {

  subjects: Subject[] = [];

  displayedColumns: string[] = ['id', 'name', 'actions'];

  menuActions: IMenuActions[] = [
    {
      icon: 'edit',
      text: 'Editar',
      iconColor: 'primary',
      funcAction: this.deleteSubject.bind(this)
    },
    {
      icon: 'delete',
      text: 'Deletar',
      iconColor: 'warn'
    }
  ]

  constructor(
    private subjectService: SubjectService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      (subject) => {
        this.subjects = subject;
      }
    );
  }

  deleteSubject(subjectId: number) {
    this.subjectService.deleteSubject(subjectId).subscribe(
      () => {
        const indexToRemove = this.subjects.findIndex(value => value.id === subjectId);
        if (indexToRemove > -1) {
          this.subjects.splice(indexToRemove, 1);
          this._snackBar.open(
            `A matéria foi excluída com sucesso.`,
            'Ok',
            {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: 4000,
            }
          );
        }

        window.location.reload();
      },
      (error) => {
        console.error('Erro ao excluir a matéria', error);
        this._snackBar.open(
          `Erro ao excluir a matéria. Por favor, tente novamente.`,
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
