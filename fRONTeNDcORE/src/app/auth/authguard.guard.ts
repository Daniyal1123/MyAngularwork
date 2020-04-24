import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  /**
   *
   */
  constructor(private router:Router) {
        
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if (localStorage.getItem('token') != null)
    return true;
    else{
this.router.navigate(['/Login']);
return false
    }
  }
  
}
