import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { AvisosComponent } from "./timeline/avisos/avisos.component";
import { HorarioComponent } from "./timeline/horario/horario.component";
import { FaltasComponent } from "./timeline/faltas/faltas.component";
import { NotasComponent } from "./notas/notas.component";
import { DesempenhoComponent } from "./desempenho/desempenho.component";
import { TurmasComponent } from "./turmas/turmas.component";
import { TeacherHomeGuard } from "src/app/core/guards/typeuser.guard";
import { studenthomeGuard } from "src/app/core/guards/studenthome.guard";
import { SettingsComponent } from "./settings/settings.component";
import { AlunosComponent } from "./alunos/alunos.component";
import { CadastroavisosComponent } from "./cadastroavisos/cadastroavisos.component";
import { CadastronotasComponent } from "./cadastronotas/cadastronotas.component";
import { MaintainNotasComponent } from "./notas/maintain-notas/maintain-notas.component";

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
               
            },
            {
                path:"desempenho",
                component:DesempenhoComponent,
               
            },
            {
                path:"turmas",
                component:TurmasComponent,
                
            },
            {
                path:"cadastronotas",
                component:CadastronotasComponent,
                
            },
            {
                path:"cadastroavisos",
                component:CadastroavisosComponent,
               
            },
            {
                path:"alunos",
                component:AlunosComponent,
            },
            {
                path:"settings",
                component:SettingsComponent
            },
            {
                path:"maintain-grade/:id",
                component:MaintainNotasComponent
            }
        ]
     }
]