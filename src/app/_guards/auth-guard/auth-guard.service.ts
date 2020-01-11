import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../_services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
  const currentUser = JSON.parse(this.authService.user);
  const role        = route.data.role;
  console.log(role, currentUser);
  if (currentUser) {      
    if(role && role.indexOf(currentUser.role) > -1)
      return true;
    else {
      this.router.navigate(['/not-found']);
      return false;
    }
  }      
  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
  return false;
}
}
