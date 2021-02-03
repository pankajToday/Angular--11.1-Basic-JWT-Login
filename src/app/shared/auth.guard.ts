import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../shared/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public tokenService: TokenService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("auth status : "+this.tokenService.isLoggedIn())
    if (this.tokenService.isLoggedIn() == false ) {
      window.alert("Access not allowed!");
      this.tokenService.removeToken();
      this.router.navigate(['sign-in'])
    }
    return true;
  }
}
