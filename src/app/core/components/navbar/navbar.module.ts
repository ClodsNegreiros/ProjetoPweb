import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './navbar.component';
import { MenuModule } from '../menu/menu.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    MatToolbarModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
