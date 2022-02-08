import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Department,  Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiLink: string = environment.url
  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiLink}/Employee/${id}`);
  }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiLink}/Employee`);
  }

  getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/Department`);
  }

  addEmployee(employee:Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiLink}/Employee`,employee);
  }
  editEmployee(employee:Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiLink}/Employee/${employee.id}`,employee);
  }
  deleteEmployee(id:number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.apiLink}/Employee/${id}`);
  }
}
