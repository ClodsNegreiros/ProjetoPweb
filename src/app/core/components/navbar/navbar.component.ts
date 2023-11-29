import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 @Input() LinkSignIn: string="";
 @Input() LinkSingUp:string="";
  InHome: boolean=false;
}
