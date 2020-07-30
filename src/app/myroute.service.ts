import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import {Location} from '@angular/common'


@Injectable({
  providedIn: 'root'
})
export class MyrouteService {

  constructor(private myroute : Router,private loca : Location) { }

  openHome()
  {
  this.myroute.navigate(['home']);
  }
  openNews()
  {
 this.myroute.navigate(['mynews']);
  }
  openDashboard()
  {
    this.myroute.navigate(['dashbrd']);
  }

  openNewsEditOpener(newsparam)
  {
    this.myroute.navigate(['dashbrd',
     {outlets: {newsEditoutlet : ['news',newsparam,'edit']}}]);
     
  }


   openListView()

   {
 
     this.myroute.navigate(['dashbrd/view/list']);
   }

    openGridView()
    {
      this.myroute.navigate(['dashbrd/view/grid']);
    }
openLogin()
{
  this.myroute.navigate(['login']);
}
  goBack()
  {
    this.loca.back();
  }

}
