import { Input } from '@angular/core';
import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegistrationSystem';
  LinkSignup="login/signup";
  LinkSignin="login";

}
