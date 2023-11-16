import { Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';

export const DashboardRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {}
