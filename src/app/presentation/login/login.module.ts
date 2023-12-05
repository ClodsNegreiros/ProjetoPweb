import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
import { FlexLayoutModule } from '@angular/flex-layout';

import { MenuModule } from 'src/app/core/components/menu/menu.module';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SigninComponent } from './signin/signin.component';
import { LoginRoutes} from './login.component.routing';
import { SigninteacherComponent } from './signinteacher/signinteacher.component';


@NgModule({
  declarations: [
    SigninComponent,
    SigninteacherComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
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
    FlexLayoutModule
  ],
  providers:[
    UserService,
    AuthService
  ]
})
export class LoginModule { }
