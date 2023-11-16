import { Component } from '@angular/core';
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

  constructor( private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      (subject) => {
        this.subjects = subject;
      }
    );
  }

  deleteSubject(subjectId: number) {
    this.subjectService.deleteSubject(subjectId).subscribe((resposta) => {
      const indxARemover = this.subjects.findIndex(value => value.id === subjectId);
      if (indxARemover > -1) {
        this.subjects.splice(indxARemover, 1);
      }
    })
  }
}
