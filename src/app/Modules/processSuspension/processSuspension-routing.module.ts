import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessSuspensionComponent } from './processSuspension/processSuspension.component';

const routes: Routes = [
  {

    path: "",
    component: ProcessSuspensionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessSuspensionRoutingModule { }
