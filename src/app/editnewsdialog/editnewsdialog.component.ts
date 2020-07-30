import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { News } from '../news';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-editnewsdialog',
  templateUrl: './editnewsdialog.component.html',
  styleUrls: ['./editnewsdialog.component.css']
})
export class EditnewsdialogComponent implements OnInit {

  localobj : News;
  newsid : any;

  constructor(public mydialog : MatDialogRef<EditnewsdialogComponent>,
    @Inject(MAT_DIALOG_DATA) private mydata:any,private mydataservice : MydataService) { }

  ngOnInit(): void {
  this.newsid=this.mydata.newskey;

  this.localobj=this.mydataservice.getNewsbyid(this.newsid);

  console.log(this.localobj);

  }
 updateRecord()
 {
  this.mydataservice.updateNews(this.localobj).subscribe(
    (res)=>{console.log(res);},
    (err)=>{console.log(err);}
 )
 
 this.mydialog.close();

 }
  closeThis()
  {

  }
}
