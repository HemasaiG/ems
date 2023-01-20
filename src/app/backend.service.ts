import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseurl="http://localhost:4000/api/employees";
  constructor(private http:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseurl);
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.http.post<Object>(this.baseurl,employee);
  }

  getEmployeeById(eid:number):Observable<Employee>{
    return this.http.get<Employee>(this.baseurl+"/"+eid);
  }

  updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.baseurl+"/update",employee);
  }

  deleteEmployee(eid:number){
    return this.http.delete(this.baseurl+"/delete/"+eid);
  }
}
