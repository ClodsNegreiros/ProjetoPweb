import { Route } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
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
                path:"signup",
                component:SignupComponent
            },
            {
                path:"signinteacher",
                component:SigninteacherComponent
            }

            
        ]
     }
]