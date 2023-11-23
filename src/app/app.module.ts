import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './core/components/navbar/navbar.module';
import { TeacherComponent } from './presentation/teacher/teacher.component';
import { ListTeacherComponent } from './presentation/teacher/list-teacher/list-teacher.component';
import { DetailTeacherComponent } from './presentation/teacher/detail-teacher/detail-teacher.component';
import { MaintainTeacherComponent } from './presentation/teacher/maintain-teacher/maintain-teacher.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './presentation/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    ListTeacherComponent,
    DetailTeacherComponent,
    MaintainTeacherComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    FlexLayoutModule
  ],
  exports:[
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

