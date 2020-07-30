import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalcuService {

  constructor() { }

   callDetails(n:string) : string
  {
 //   alert("Welcome " + n);
    return "Welcome" + n;
  }
}
