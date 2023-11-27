import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';



 export const canActivateHome: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(AuthService).isauthenticaded() ? true : inject(Router).createUrlTree(['/login']);
    };