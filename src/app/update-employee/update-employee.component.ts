import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { verifyHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  eid:number=0;
  employee: Employee=new Employee();
  constructor(private service:BackendService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.eid=this.route.snapshot.params['id'];
    this.service.getEmployeeById(this.eid).subscribe(data=>{
      this.employee=data},
      (error)=>console.log(error),
      ()=>console.log(this.employee));
  }

  update(){
    this.service.updateEmployee(this.employee).subscribe(data=> this.employee=data,
      error=>console.log(error),
      ()=>console.log(this.employee));
  }



}






