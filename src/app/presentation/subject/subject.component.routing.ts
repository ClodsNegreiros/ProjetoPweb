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
        path: 'maintain-subject',
        component: MaintainSubjectComponent
      },
      {
        path: 'maintain-subject/:id',
        component: MaintainSubjectComponent
      },
      {
        path: '',
        component: ListSubjectComponent
      },
    ]
  },
  {
    path: ':id',
    component: DetailSubjectComponent
  },
]
