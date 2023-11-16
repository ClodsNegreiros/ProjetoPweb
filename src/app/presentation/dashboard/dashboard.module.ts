import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes, DashboardRoutingModule } from './dashboard.component.routing';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
