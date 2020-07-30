import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { News } from './news';
import { MyauthService } from './myauth.service';

@Injectable({
  providedIn: 'root'
})

export class MydataService {

  url : string;
  // news : News;
   newsarr : Array<News>=[];
   newsSubject : BehaviorSubject<Array<News>>;


  constructor(private httpcli : HttpClient,private authservice : MyauthService) {
   // this.url="http://localhost:3000/news";
   this.url="http://localhost:3000/api/v1/news";
   this.newsSubject=new BehaviorSubject([]);
  // this.newsarr=
   }

   fetchFromBackend()
   {
    let tok=this.authservice.getMytoken();
    console.log(tok);
    return this.httpcli.get<Array<News>>(this.url,
      {
        headers: new HttpHeaders().set('Authorization',`Bearer ${tok}`)
      }
      ).subscribe( res=>
        {
          this.newsarr=res;
          this.newsSubject.next(this.newsarr);

        },
        (err)=>
        {
          this.newsSubject.error(err);
        }
        );
   }


  addNews(newsobj : News) : Observable<News>
  {
    let tok=this.authservice.getMytoken();
    return this.httpcli.post<News>(this.url,newsobj,
      {

        headers: new HttpHeaders().set('Authorization',`Bearer ${tok}`)
      }).do(
        res => {
          this.newsarr.push(res);
          this.newsSubject.next(this.newsarr);
        }
      )
  }

  getNews() : Observable<Array<News>>
  {

return this.newsSubject;

// let tok=this.authservice.getMytoken();
// console.log(tok);
// return this.httpcli.get<Array<News>>(this.url,
//   {
//     headers: new HttpHeaders().set('Authorization',`Bearer ${tok}`)
//   }
//   ) ;

  }
  
 updateNews(enewsobj : News) : Observable<News>
  {
    let tok=this.authservice.getMytoken();
    return this.httpcli.put<News>(`http://localhost:3000/api/v1/news/${enewsobj.id}`,
    enewsobj,
    {

      headers: new HttpHeaders().set('Authorization',`Bearer ${tok}`)
    }).do(
        (enote)=>
         {
           let currnote = this.newsarr.find( n=> n.id==enote.id);
            Object.assign(currnote,enote);
            this.newsSubject.next(this.newsarr);
         }
    )
    
  }

  getNewsbyid(newsid) : News
  {
    let result=this.newsarr.find( n=> n.id==newsid);
    return ( Object.assign({},result));
  }

}
