import { Component } from '@angular/core';
import { SubjectService } from 'src/app/core/services/subject.service';
import { Subject } from 'src/app/domain/entities/Subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  constructor(private subjectService: SubjectService) {}
}
