import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseurl="http://localhost:3002/api/employees";
  constructor(private http:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:3000/api/employees');
  }
}
