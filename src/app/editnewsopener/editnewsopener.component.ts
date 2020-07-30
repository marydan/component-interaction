import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditnewsdialogComponent } from '../editnewsdialog/editnewsdialog.component';

@Component({
  selector: 'app-editnewsopener',
  templateUrl: './editnewsopener.component.html',
  styleUrls: ['./editnewsopener.component.css']
})
export class EditnewsopenerComponent implements OnInit {

  constructor(private dialog : MatDialog,private route : ActivatedRoute ) {

    const newid=+this.route.snapshot.paramMap.get('newsid');
    const mydialog=this.dialog.open(EditnewsdialogComponent,
                    {data : {newskey : newid}})
   }

  ngOnInit(): void {
  }

}
