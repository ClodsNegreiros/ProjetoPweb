import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { SubjectComponent } from './subject.component';
import { SubjectRoutes } from './subject.component.routing';
import { ListSubjectComponent } from './list-subject/list-subject.component';
import { MaintainSubjectComponent } from './maintain-subject/maintain-subject.component';
import { SubjectService } from 'src/app/core/services/subject.service';
import { DetailSubjectComponent } from './detail-subject/detail-subject.component';
import { MenuModule } from 'src/app/core/components/menu/menu.module';

@NgModule({
  declarations: [
    SubjectComponent,
    ListSubjectComponent,
    MaintainSubjectComponent,
    DetailSubjectComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MenuModule,
    ReactiveFormsModule,
    RouterModule.forChild(SubjectRoutes)
  ],
  providers: [
    SubjectService
  ]
})
export class SubjectModule { }
