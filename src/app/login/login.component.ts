import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MyrouteService } from '../myroute.service';
import { MyauthService } from '../myauth.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username : FormControl;
  password: FormControl;
  loginform : FormGroup;
  mytoken : any;
  
  constructor(private routobj : MyrouteService,private authobj:MyauthService) {
   

    this.loginform=new FormGroup(
      {
    username :new FormControl('',Validators.required),
    password:new FormControl('',Validators.minLength(6))
   });

  }

   checkId() 
   {
    //  if(this.username.touched)
    //  {
    //  let result=this.username.hasError("required") ? "Name can not be null" : "";

    //  return result;
    //  }
    

   }

   checkPassword()
   {
    //  if (this.password.invalid)
    //  {
    //    return "Password lenght should be >6";
    //  }
   }
   
   getValue()
   {
     //this.routobj.openDashboard();
  console.log (this.loginform.value);
 let data=this.loginform.value;
  this.authobj.authenticateUser(data).subscribe(
    (res)=> { 
             
           let tok=res["token"];
            this.authobj.setMytoken(tok);
            console.log(tok);
       //     this.routobj.openDashboard();
          }         ,
    (err)=>
      { 
        console.log("inside failure");
        console.log(err); 
      }
  );

  

   }

  ngOnInit(): void {
  }

  checkvalid() 
  {
 //  var  ans : boolean= false;
  //  return this.authobj.checkUserAuthenticated();

    }
}
