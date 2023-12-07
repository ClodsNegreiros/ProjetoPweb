import { Router,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes} from './dashboard.component.routing';
import { NavbarModule } from 'src/app/core/components/navbar/navbar.module';

@NgModule({
  declarations: [
    DashboardComponent,  
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    RouterModule.forChild(DashboardRoutes)
  ]
})
export class DashboardModule { }
