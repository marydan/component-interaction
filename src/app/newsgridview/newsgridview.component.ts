import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-newsgridview',
  templateUrl: './newsgridview.component.html',
  styleUrls: ['./newsgridview.component.css']
})
export class NewsgridviewComponent implements OnInit {

  news : News;
  newsarr : Array<News>=[];

   validcount:number=0;
   invalidcount :number=0;
  constructor(private dataserve : MydataService) {
    this.news=new News();
   }
   ngOnInit(): void 
   {
    this.getAllRecords();
   }
 
  

  getAllRecords()
 {
   this.dataserve.getNews().subscribe(
     (newsrecords)=>
     {
       this.newsarr=newsrecords;
     },
     (err)=>
     {
      document.getElementById("errinfo").innerText=err;
     }
   )
 }

 Check(a : any)
 {
  // alert(a);
   a?this.validcount++:this.invalidcount++;

 }
}
