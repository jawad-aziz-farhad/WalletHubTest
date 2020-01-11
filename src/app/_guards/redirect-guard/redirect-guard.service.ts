import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../_services/auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuardService implements CanActivate {

  constructor(private router: Router , private authService : AuthService ) { }

  canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    const user = JSON.parse(this.authService.user);
    
    if (user) {      
      this.router.navigate(['/'+ user.role ]);
      return true;      
    }      
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
