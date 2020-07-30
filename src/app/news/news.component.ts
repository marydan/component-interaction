import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { MydataService } from '../mydata.service';
 

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  news : News;
  newsarr : Array<News>=[];

  constructor(private dataserve : MydataService) {
    this.news=new News();
   }
 
  ngOnInit(): void 
  {
 
  }

 



}
