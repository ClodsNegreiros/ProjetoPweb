import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotasFirebaseService } from 'src/app/core/services/notasfirebase.service';
import { SubjectService } from 'src/app/core/services/subject.service';
import { Grade } from 'src/app/domain/entities/Grade';
import { Subject } from 'src/app/domain/entities/Subject';

@Component({
  selector: 'app-desempenhoturma',
  templateUrl: './desempenhoturma.component.html',
  styleUrls: ['./desempenhoturma.component.css']
})
export class DesempenhoturmaComponent {
  grades: Grade[] = [];

  displayedColumns: string[] = ['aluno', 'nota', 'actions'];

  constructor(
    private notaservice : NotasFirebaseService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.notaservice.listar().subscribe((grades:Grade[])=>{
      this.grades=grades;
    })
  }

  deleteSubject(subjectId: string) {
    this.notaservice.apagar(subjectId).subscribe(
      () => {
        const indexToRemove = this.grades.findIndex(value => value.id === subjectId);
        if (indexToRemove > -1) {
          this.grades.splice(indexToRemove, 1);
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
