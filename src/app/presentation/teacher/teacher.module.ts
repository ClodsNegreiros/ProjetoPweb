import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'src/app/core/components/menu/menu.module';
import { RouterModule } from '@angular/router';
import { TeacherRoutes } from './teacher.component.routing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatTabsModule,
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
    RouterModule.forChild(TeacherRoutes)
  ]
})
export class TeacherModule { }
