import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";
import { TimelineComponent } from "./timeline/timeline.component";

export const HomeRoutes: Route[] = [
    {
    path:"",
    component:HomeComponent,
    children:[
            {
        path:"",
        component:TimelineComponent
            }
        ]
     }
]