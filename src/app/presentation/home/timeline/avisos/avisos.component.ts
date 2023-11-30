import { Component } from '@angular/core';
import { Aviso } from 'src/app/domain/entities/Aviso';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent {
avisos: Aviso[]= [
  {
    teacher:"Gustavo Wag",
    header:"Aula adiada!",
    text:"pessoal estou enfermo."
  }
]

}
