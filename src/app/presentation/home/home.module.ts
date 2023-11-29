import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";
import { HomeRoutes } from './home.component.routing';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    HttpClientModule,
  ]
})
export class HomeModule { }
