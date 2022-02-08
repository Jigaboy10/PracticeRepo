import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee', pathMatch: 'full'

  },
  {
    path: 'employee',
    loadChildren: () => import('./feature/employee/employee.module').then(m => m.EmployeeModule)
  },
  { path: 'test', loadChildren: () => import('./feature/test-module/test-module.module').then(m => m.TestModuleModule) },
  {
    path: '**',
    component: PageNotFoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
