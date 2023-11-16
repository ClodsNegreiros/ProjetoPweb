import { Component, Input } from '@angular/core';

import { IMenuActions } from '../menu/menu.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() menuIcon: string = '';
  @Input() menuActions: IMenuActions[] = []
}
