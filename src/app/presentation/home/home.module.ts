import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";
import { HomeRoutes } from './home.component.routing';
import {HttpClientModule} from '@angular/common/http'
import { NavbarModule } from 'src/app/core/components/navbar/navbar.module';
import {Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';





@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    HttpClientModule,
    MatSidenavModule,
    SidebarModule,
  ]
})
export class HomeModule { }
