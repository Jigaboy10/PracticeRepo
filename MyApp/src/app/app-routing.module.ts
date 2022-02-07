import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'employee' , pathMatch:'full'
    
  },
  {
  path:'employee',
  loadChildren: () => import('./feature/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path:'**',
    component:PageNotFoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
