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
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MatCardModule } from '@angular/material/card';
import { FaltasComponent } from './timeline/faltas/faltas.component';
import { AvisosComponent } from './timeline/avisos/avisos.component';
import { HorarioComponent } from './timeline/horario/horario.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { NotasComponent } from './notas/notas.component';
import { TurmasComponent } from './turmas/turmas.component';
import { DesempenhoComponent } from './desempenho/desempenho.component';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SettingsComponent } from './settings/settings.component';





@NgModule({
  declarations: [HomeComponent, TimelineComponent,FaltasComponent,AvisosComponent,HorarioComponent,SidebarComponent, NotasComponent, TurmasComponent, DesempenhoComponent, SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    HttpClientModule,
    MatSidenavModule,
     MatCardModule,
     MatTabsModule,
     MatTableModule,
     MatSortModule,
     MatFormFieldModule,
     MatInputModule,
     MatPaginatorModule,
     MatSnackBarModule
  ]
})
export class HomeModule { }
