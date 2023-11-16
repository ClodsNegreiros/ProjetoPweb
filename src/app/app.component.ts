import { Component } from '@angular/core';

import { IMenuActions } from './core/components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegistrationSystem';

  menuActions: IMenuActions[] = [
    {
      icon: 'library_books',
      text: 'Matéria(s)',
      routerLinkName: '/subject'
    },
    {
      icon: 'groups',
      text: 'Aluno(s)'
    }
  ]
}
