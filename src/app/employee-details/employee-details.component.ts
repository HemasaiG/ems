import { ActivatedRoute } from '@angular/router';
import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee=new Employee();
  constructor(private service:BackendService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const eid=this.route.snapshot.params['id'];
    this.service.getEmployeeById(eid).subscribe((data)=>{
      this.employee=data
    },()=>console.log("Completed"));
  }


}
