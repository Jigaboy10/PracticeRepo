import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MVPPracticeRoutingModule } from './mvp-practice-routing.module';
import { MVPPracticeComponent } from './mvp-practice.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { MVPService } from './mvp.service';
import { UserFormPresentationComponent } from './user-list-container/user-list-presentation/user-form-presentation/user-form-presentation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MVPPracticeComponent,
    UserListContainerComponent,
    UserListPresentationComponent,
    UserFormPresentationComponent
  ],
  imports: [
    CommonModule,
    MVPPracticeRoutingModule,
    SharedModule
  ],
  providers:[MVPService]
})
export class MVPPracticeModule { }
