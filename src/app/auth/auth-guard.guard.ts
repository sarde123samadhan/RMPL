import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,ActivatedRoute,RouterState } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/AuthService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService:AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.autheriseAdmin()){
        return true;
      }
      else{
        return false;
      }
  }
}
