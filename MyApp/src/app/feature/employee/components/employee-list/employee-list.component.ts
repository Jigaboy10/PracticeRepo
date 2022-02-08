import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employeeDetails: Employee[];
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.employeeService.getEmployee().subscribe((res: Employee[]) => {
      this.employeeDetails = res;
    })

  }

  public editEmployee(id: number) {
   this.router.navigateByUrl(`/employee/employee-form/${id}`);
    // this.employeeService.getById(id).subscribe((res: Employee) => {
    //   debugger
    // })
  }

  public deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      this.getEmployeeData();
    })
  }
}
