import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor (private authService: AuthService,
            private route: Router) {}

    canActivate(router: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                this.authService.isAuthenticated()
                .then(
                    (authenticated: boolean) => {
                        if (authenticated) {
                            return true;
                        } else {
                            this.route.navigate(['/']);
                        }
                    }
                );
                //return false;
            } 

}