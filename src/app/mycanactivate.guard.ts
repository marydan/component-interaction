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
 
    // let ans=this.authservice.checkUserAuthenticated();
     
    let ans;
  
    let mytoken=this.authservice.getMytoken();
     if (mytoken!=null)
      ans=true;
      else
      ans=false;

       if( !ans)
        {
           (res)=>
                  {
                    if(!res)
                    this.rouobj.openLogin();
                  
                  return false;
                  }
          }
      return true;   
  }
  
}
