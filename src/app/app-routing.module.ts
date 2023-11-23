import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/presentation/dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: 'subject',
    loadChildren: () => import('../app/presentation/subject/subject.module').then(module => module.SubjectModule)
  },
  {
    path:"teacher",
    loadChildren: ()=>import("../app/presentation/teacher/teacher.module").then(module=>module.TeacherModule)
  },
  {
    path:"login",
    loadChildren:()=>import("../app/presentation/login/login.module").then(module=>module.LoginModule)
  },
  {
    path:"**",
    redirectTo:''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
