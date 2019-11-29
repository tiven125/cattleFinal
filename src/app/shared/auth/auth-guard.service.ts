

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}
    public router: Router

  canActivate () {
    if (this.authService.estaLogueado()) {
      return true;
    } else {
      this.router.navigate(['user/login'])
      location.reload();
      sessionStorage.clear();
      return false;
    }

  }
}

