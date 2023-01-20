import { Router, RouterModule } from '@angular/router';
import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  public employee: Employee = new Employee;
  constructor(private service:BackendService,router:Router) { }

  ngOnInit(): void {
  }



  onSubmit(){
    console.log(this.employee);
    this.service.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
    },()=>console.log("Completed"));

  }

}
