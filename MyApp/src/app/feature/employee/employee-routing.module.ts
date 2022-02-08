import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'employee-list', pathMatch: 'full' },
      {
        path: '', component: EmployeeListComponent
      },
      {
        path: 'employee-list', component: EmployeeListComponent
      },
      {
        path: 'employee-form', component: EmployeeFormComponent
      },
      {
        path: 'employee-form/:id', component: EmployeeFormComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
