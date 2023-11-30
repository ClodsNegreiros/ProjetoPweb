import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioComponent } from './horario/horario.component';
import { FaltasComponent } from './faltas/faltas.component';



@NgModule({
  declarations: [
    HorarioComponent,
    FaltasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TimelineModule { }
