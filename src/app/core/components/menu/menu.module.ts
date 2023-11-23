import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { MenuComponent } from './menu.component';
import { FlexLayoutModule } from '@angular/flex-layout/module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
