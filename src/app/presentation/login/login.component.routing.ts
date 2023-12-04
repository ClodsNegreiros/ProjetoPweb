import { Route } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { LoginComponent } from "./login.component";
import { SigninteacherComponent } from "./signinteacher/signinteacher.component";


export const LoginRoutes: Route[] = [
    {
    path:"",
    component:LoginComponent,
    children:[
                {
                    path:"",
                    component:SigninComponent
                },
                {
                    path:"signinteacher",
                    component:SigninteacherComponent
                }

            
        ]
     }
]