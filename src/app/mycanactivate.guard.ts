import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyauthService } from './myauth.service';
import { MyrouteService } from './myroute.service';

@Injectable({
  providedIn: 'root'
})
export class MycanactivateGuard implements CanActivate {


  constructor(private authservice : MyauthService,private rouobj:MyrouteService)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
     let ans=this.authservice.checkUserAuthenticated();
     
       return  ans.then
         (
           (res)=>
                  {
                    if(!res)
                    this.rouobj.openLogin();
                  
                  return res;
                  }
         )
         .catch (
           e=>
           {return false;}
           )
  }
  
}
