import { Inject, inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isUserAuthorized()) return true;
  return router.parseUrl('/');
};

@Injectable({
  providedIn: 'root'
})
export class authSavedGuard implements CanActivate {
  constructor(private _routerService: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const savedLoginInfo = localStorage.getItem("rememberUser") 
    console.log(!!savedLoginInfo && savedLoginInfo === 'true');

    if(!!savedLoginInfo && savedLoginInfo === 'true' ) {
      return this._routerService.parseUrl('/home')
    }
    return true
  }
}

