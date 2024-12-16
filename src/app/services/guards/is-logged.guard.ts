import {CanActivateFn, Router} from '@angular/router';
import {LoginService} from '../auth/login.service';
import {inject} from '@angular/core';

export const isLoggedGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.getUser()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
