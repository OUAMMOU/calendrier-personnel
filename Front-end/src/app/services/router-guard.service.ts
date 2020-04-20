import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodeAuthenticationService } from './hardcode-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate{

  constructor(private router: Router,private HardcodeAuthenticationService: HardcodeAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.HardcodeAuthenticationService.isUserLoogedIn())
      return true;
    else{
      this.router.navigate(['login']);
      
      return false;}
    }
  }



