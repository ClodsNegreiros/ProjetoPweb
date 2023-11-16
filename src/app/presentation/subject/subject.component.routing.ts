import { Route } from "@angular/router";
import { SubjectComponent } from "./subject.component";
import { DetailSubjectComponent } from "./detail-subject/detail-subject.component";
import { ListSubjectComponent } from './list-subject/list-subject.component';
import { MaintainSubjectComponent } from './maintain-subject/maintain-subject.component';

export const SubjectRoutes: Route[] = [
  {
    path: '',
    component: SubjectComponent,
    children: [
      {
        path: '',
        component: ListSubjectComponent
      },
      {
        path: 'maintain-list',
        component: MaintainSubjectComponent
      }
    ]
  },
  {
    path: ':id',
    component: DetailSubjectComponent
  }
]
