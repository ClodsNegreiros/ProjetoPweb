import { Route } from "@angular/router";
import { TeacherComponent } from "./teacher.component";
import { DetailTeacherComponent } from "./detail-teacher/detail-teacher.component";
import { ListTeacherComponent } from './list-teacher/list-teacher.component';
import { MaintainTeacherComponent } from './maintain-teacher/maintain-teacher.component';

export const TeacherRoutes: Route[] = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      {
        path: 'maintain-teacher',
        component: MaintainTeacherComponent
      },
      {
        path: 'maintain-teacher/:id',
        component: MaintainTeacherComponent
      },
      {
        path: 'list-teacher',
        component: ListTeacherComponent
      },
    ]
  },
  {
    path: ':id',
    component: DetailTeacherComponent
  },
]

