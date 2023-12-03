import { ChangeDetectorRef, Component, SimpleChange, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

import { SubjectService } from 'src/app/core/services/subject.service';
import { Subject } from 'src/app/domain/entities/Subject';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent {

  subjects!: MatTableDataSource<Subject>;

  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(
    private subjectService: SubjectService,
    // TODO: Criar service para snackbar, evitar repetição de código.
    private _snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      (subject) => {
        this.subjects = new MatTableDataSource<Subject>(subject);
      }
    );
  }

  deleteSubject(subjectId: number) {
    this.subjectService.deleteSubject(subjectId).subscribe(
      () => {
        const indexToRemove = this.subjects.data.findIndex(value => value.id === subjectId);
        if (indexToRemove > -1) {
          this.subjects.data.splice(indexToRemove, 1);
          this.subjects = new MatTableDataSource(this.subjects.data);

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
