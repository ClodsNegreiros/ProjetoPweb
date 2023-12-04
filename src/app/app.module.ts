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
import { LoginComponent } from './presentation/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './presentation/registration/registration.component';
import { CadastronotasComponent } from './presentation/cadastronotas/cadastronotas.component';
import { AlunosComponent } from './presentation/alunos/alunos.component';
import { CadastroavisosComponent } from './presentation/cadastroavisos/cadastroavisos.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    ListTeacherComponent,
    DetailTeacherComponent,
    MaintainTeacherComponent,
    LoginComponent,
    CadastronotasComponent,
    AlunosComponent,
    CadastroavisosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports:[
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

