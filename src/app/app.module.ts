import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TeacherComponent } from './presentation/teacher/teacher.component';
import { ListTeacherComponent } from './presentation/teacher/list-teacher/list-teacher.component';
import { DetailTeacherComponent } from './presentation/teacher/detail-teacher/detail-teacher.component';
import { MaintainTeacherComponent } from './presentation/teacher/maintain-teacher/maintain-teacher.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FirestoreModule } from 'src/firestore/firestore.module';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    ListTeacherComponent,
    DetailTeacherComponent,
    MaintainTeacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FirestoreModule
  ],
  exports:[
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

