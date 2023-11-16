import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menuIcon: string = '';
  @Input() menuActions: IMenuActions[] = []
}

export interface IMenuActions {
  icon: string;
  text: string;
  iconColor?: string;
  routerLinkName?: string;
  funcAction?: (item?: any) => void;
}
