import { Component, OnInit } from '@angular/core';
import { CalcuService } from '../calcu.service';
import { MyrouteService } from '../myroute.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private calserve : CalcuService,private rouobj : MyrouteService ) { }
 title : string ="";

 isNoteView :boolean=true;

  ngOnInit(): void {

    this.title=this.calserve.callDetails("USTG");
  }

  moveBack()
  {
    this.rouobj.goBack();
  }

   logout()
   {
     sessionStorage.clear();
     this.rouobj.openLogin();

   }

   changeView()
   {
      if(this.isNoteView) 
      {
      this.rouobj.openListView();
      this.isNoteView=false;
      }    
      else
      {
        this.rouobj.openGridView();
        this.isNoteView=true;
      }
   }

 

}
