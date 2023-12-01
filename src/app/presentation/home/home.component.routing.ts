import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { AvisosComponent } from "./timeline/avisos/avisos.component";
import { HorarioComponent } from "./timeline/horario/horario.component";
import { FaltasComponent } from "./timeline/faltas/faltas.component";
import { NotasComponent } from "./notas/notas.component";
import { DesempenhoComponent } from "./desempenho/desempenho.component";
import { TurmasComponent } from "./turmas/turmas.component";

export const HomeRoutes: Route[] = [
    {
    path:"",
    component:HomeComponent,
    children:[
            {
                path:"",
                component:TimelineComponent
            },
            {
                path:"notas",
                component:NotasComponent
            },
            {
                path:"desempenho",
                component:DesempenhoComponent
            },
            {
                path:"turmas",
                component:TurmasComponent
            }
        ]
     }
]