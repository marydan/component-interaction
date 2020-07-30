import { Component, OnInit } from '@angular/core';
import { TestserveService } from '../testserve.service';

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.css']
})
export class MytestComponent implements OnInit {

   company : string;
   description : string;
  constructor(private testserv : TestserveService) { }

  ngOnInit(): void {
    this.description=this.testserv.news.descri;
  }

}
