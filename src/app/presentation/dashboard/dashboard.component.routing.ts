import { Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';

export const DashboardRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children:[{
      path:"",
      component:NavbarComponent
    }]
  }
]

