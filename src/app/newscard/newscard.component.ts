import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { News } from '../news';
import { MatDialog } from '@angular/material/dialog';
import { EditnewsdialogComponent } from '../editnewsdialog/editnewsdialog.component';
import { MyrouteService } from '../myroute.service';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.css']
})
export class NewscardComponent implements OnInit {

  @Input()
  mynews : News;

 @Output()
 validity =new EventEmitter<boolean>();


  constructor(public mydialog : MatDialog,private route : MyrouteService) { }

  ngOnInit(): void {
  }

  checkValid(ans :boolean)
  {
      this.validity.emit(ans);

  }
  showDetails()
  {
    alert(this.mynews.title);
  }
  editValue()
  {
    this.route.openNewsEditOpener(this.mynews.id); 
  }

}
