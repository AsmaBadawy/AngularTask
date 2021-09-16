import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable} from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class authGuard implements CanActivate {

  constructor(
    private auth:AuthService,
    private router: Router,
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   Observable<boolean> | Promise<boolean> | boolean {

    // handle any redirects if a user isn't authenticated
    if (this.auth.getToken())
    {
      return true
    }
    else
    {
      this.router.navigate(['login']);    
      return false;
    }
  }
}
