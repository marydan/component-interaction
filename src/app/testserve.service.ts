import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class TestserveService {

  news : News;
  constructor() 
  {
    this.news=new News();
   }
   getTitle()
   {
     return this.news.title;
   }
  
   getDescription()
   {
     return this.news.descri;
   }

}
