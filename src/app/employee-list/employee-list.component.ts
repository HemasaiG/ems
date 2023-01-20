import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[]=[];
  constructor(private service:BackendService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.service.getEmployeesList().subscribe((data)=>
    this.employees=data,
    ()=>console.log(this.employees),
    );
  }

  delete(eid:number){
    alert("Are you Sure You want to delete")
    this.service.deleteEmployee(eid).subscribe((data)=> {
      console.log(data)
      this.getAllEmployees();
    },
    (err)=>console.error(err),
    ()=> console.log("Completed"));
  }

  view(eid:number){
    this.service.getEmployeeById(eid).subscribe()
  }
}
