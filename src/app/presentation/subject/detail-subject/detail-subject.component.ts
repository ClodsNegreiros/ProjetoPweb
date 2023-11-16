import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/core/services/subject.service';
import { Subject } from 'src/app/domain/entities/Subject';

@Component({
  selector: 'app-detail-subject',
  templateUrl: './detail-subject.component.html',
  styleUrls: ['./detail-subject.component.css']
})
export class DetailSubjectComponent {

  id!: string;
  subject!: Subject | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(params);
      this._subjectService.searchSubjectById(parseInt(this.id)).subscribe(
        (subject) => {
          this.subject = subject;
        }
      );
    });
  }
}
