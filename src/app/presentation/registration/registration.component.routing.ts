import { Route } from "@angular/router";
import { RegistrationComponent } from "./registration.component";
import { Component } from "@angular/core";
import { AccountsettingsComponent } from "./accountsettings/accountsettings.component";

export const RegistrationRoutes: Route[] = [
  {
    path: '',
    component: RegistrationComponent,
    
  },
  {
    path:"account-settings",
    component:AccountsettingsComponent
    }
]