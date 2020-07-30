import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-newslistview',
  templateUrl: './newslistview.component.html',
  styleUrls: ['./newslistview.component.css']
})
export class NewslistviewComponent implements OnInit {

  news : News;
  newsarr : Array<News>=[];
  localnews : Array<News>=[];
  globalnews : Array<News>=[];


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
       this.localnews=this.newsarr.filter( n => n.title=='India');
       this.globalnews=this.newsarr.filter( n=> n.title!='India');
     
     },
     (err)=>
     {
      document.getElementById("errinfo").innerText=err;
     }
   )
 }
}
