import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {LoginService} from '../auth/login.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let currentUserService = inject(LoginService);
  let currentUser = currentUserService.getUser();

  const reqClone = req.clone({
    setHeaders: {
      "Content-Type": "application/json",
      //"Authorization": `Bearer ${currentUser?.username}`
    }
  });

  return next(reqClone);
};
