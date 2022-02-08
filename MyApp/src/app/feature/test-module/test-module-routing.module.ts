import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestModuleComponent } from './test-module.component';

const routes: Routes = [{ path: '', component: TestModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestModuleRoutingModule { }
