import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MVPPracticeComponent } from './mvp-practice.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserFormPresentationComponent } from './user-list-container/user-list-presentation/user-form-presentation/user-form-presentation.component';
import { UserFormPresenterService } from './user-list-container/user-list-presentation/user-form-presenter/user-form-presenter.service';

const routes: Routes = [
  {
    path: '' , 
    children:[
      {
        path:'' , redirectTo:'user-list', pathMatch:'full'
      },
      {
        path:'user-list' ,component: UserListContainerComponent
      },
      {
        path:'add' ,component: UserFormPresentationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MVPPracticeRoutingModule { }
