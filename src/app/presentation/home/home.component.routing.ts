import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { AvisosComponent } from "./timeline/avisos/avisos.component";
import { HorarioComponent } from "./timeline/horario/horario.component";
import { FaltasComponent } from "./timeline/faltas/faltas.component";
import { NotasComponent } from "./notas/notas.component";
import { DesempenhoComponent } from "./desempenho/desempenho.component";
import { TurmasComponent } from "./turmas/turmas.component";
import { CadastronotasComponent } from "../cadastronotas/cadastronotas.component";
import { CadastroavisosComponent } from "../cadastroavisos/cadastroavisos.component";
import { AlunosComponent } from "../alunos/alunos.component";
import { TeacherHomeGuard } from "src/app/core/guards/typeuser.guard";
import { studenthomeGuard } from "src/app/core/guards/studenthome.guard";

export const HomeRoutes: Route[] = [
    {
    path:"",
    component:HomeComponent,
    children:[
            {
                path:"",
                component:TimelineComponent,
            },
            {
                path:"notas",
                component:NotasComponent,
                canActivate:[studenthomeGuard]
            },
            {
                path:"desempenho",
                component:DesempenhoComponent,
                canActivate:[studenthomeGuard]
            },
            {
                path:"turmas",
                component:TurmasComponent,
                canActivate:[studenthomeGuard]
            },
            {
                path:"cadastronotas",
                component:CadastronotasComponent,
                canActivate:[TeacherHomeGuard]
            },
            {
                path:"cadastroavisos",
                component:CadastroavisosComponent,
                canActivate:[TeacherHomeGuard]
            },
            {
                path:"alunos",
                component:AlunosComponent,
                canActivate:[TeacherHomeGuard]
            },
        ]
     }
]