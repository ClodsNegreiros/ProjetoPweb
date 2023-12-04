import { CanActivateFn, Router } from '@angular/router';

export class IAuth{
  router:Router=new Router();
}

export const TeacherHomeGuard: CanActivateFn = (route, state) => {
  
  const router= new IAuth();
  const user = JSON.parse(window.localStorage.getItem('user') ?? "");
    if(user.type==='aluno'){
      router.router.navigate(['/'])
      return false
    }
    else{
      return true;
    }
};
