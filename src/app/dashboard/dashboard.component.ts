import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataserve : MydataService) {
    this.dataserve.fetchFromBackend();
//this.dataserve.getNews();
   }

  ngOnInit(): void {
  }

}
