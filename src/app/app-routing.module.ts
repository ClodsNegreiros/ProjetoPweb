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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
