import { Component, OnInit } from '@angular/core';
import { RegisterserviceService } from '../registerservice.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MyrouteService } from '../myroute.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerform : FormGroup;
  username : FormControl;
  password: FormControl;

  constructor(private regserve : RegisterserviceService,private rout:MyrouteService) {

    this.registerform=new FormGroup(
      {
        username: new FormControl("",Validators.required),
        password: new FormControl("",Validators.required)
      }
    )
   }



  ngOnInit(): void {

  }

  storeRec()
  {
    let data=this.registerform.value;
this.regserve.registerUser(data).subscribe
( (res)=> console.log("user Registered" + res)
)

  }

  callLogin()
{
  this.rout.openLogin();
  console.log("yes");
}

}
