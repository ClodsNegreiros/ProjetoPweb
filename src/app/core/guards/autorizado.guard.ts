import { CanActivateFn ,Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';


 export class IAuth{
   router:Router=new Router();
 }


export const canActivateHome: CanActivateFn = (route, state) => {
  const router= new IAuth().router;
  const token= window.localStorage.getItem('token')

  if(token){
    return true;
  }
  else{
    router.navigate(['/login']);
    return false;
  }
};
