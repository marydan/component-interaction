import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class MyauthService {

  constructor(private httpcli : HttpClient) {

   }

   authenticateUser(userdet)
   {
   
     return this.httpcli.post('http://localhost:3000/auth/v1',userdet);
   }

   setMytoken(tok)
   {
     sessionStorage.setItem("mytoken",tok);
     localStorage.setItem
   }

   getMytoken() :any
   {
   return sessionStorage.getItem("mytoken");
   }

   checkUserAuthenticated() : Promise<boolean>
   {
     let tok=this.getMytoken();
     return this.httpcli.post('http://localhost:3000/auth/v1/isAuthenticated',
     {},
     {headers : new HttpHeaders().set('Authorization',`Bearer ${tok}`)}
     ).map(
       (res)=>{return (res["isAuthenticated"]);}
       ).toPromise();


   }

}
