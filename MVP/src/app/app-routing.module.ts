import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'MVP',
    pathMatch: 'full'
  },
  {
    path: 'MVP', loadChildren: () => import('./mvp-practice/mvp-practice.module').then(m => m.MVPPracticeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
