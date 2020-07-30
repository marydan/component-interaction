import { Component } from '@angular/core';
import { Employee } from './employee';
import { CalcuService } from './calcu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
   
})
export class AppComponent {
  title = 'MaterialApp';
 
   employee : Employee;
   employees : Array<Employee> =[];

constructor(private calserve : CalcuService)
{

}



   ngOnInit()
 {
   this.employee=new Employee();

 }

  addRecord()
  {
    let n=this.calserve.callDetails(this.employee.name);
  this.employees.push(this.employee);
      this.employee=new Employee();

      
  }
}
