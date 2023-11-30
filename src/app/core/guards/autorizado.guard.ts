import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const canActivateHome: CanActivateFn = (route, state) => {

  return true;
};
