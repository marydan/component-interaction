import { Injectable } from '@angular/core';
import { Register } from './reigster';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private httpcli : HttpClient) { }
 
  registerUser( user : Register) : Observable<Register>
  {
 return this.httpcli.post<Register>("http://localhost:9095/api/register/addUser",user);
  }

}
