import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
import { News } from '../news';

@Component({
  selector: 'app-newstaker',
  templateUrl: './newstaker.component.html',
  styleUrls: ['./newstaker.component.css']
})
export class NewstakerComponent implements OnInit {

  
  news : News;
  newsarr : Array<News>=[];

  constructor(private dataserve : MydataService) {
    this.news=new News();
   }

  ngOnInit(): void {
  }

  addRecord()
  {
    this.newsarr.push(this.news);
 
    this.dataserve.addNews(this.news)
    .subscribe(
      (result)=>
      {
  //      this.newsarr.push(result);
        this.news=new News();
      
      },
      (err) =>
      {
        
        document.getElementById("errinfo").innerText=err;
      }
   );
   // this.getAllRecords();
  }

}
