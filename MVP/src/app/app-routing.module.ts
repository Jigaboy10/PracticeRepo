import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadPresentationComponent } from './shared/file-upload/file-upload-presentaion/file-upload-presentaion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'MVP',
    pathMatch: 'full'
  },
  {
    path: 'MVP', loadChildren: () => import('./mvp-practice/mvp-practice.module').then(m => m.MVPPracticeModule)
  },
  {
    path: 'file-upload', component:FileUploadPresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
