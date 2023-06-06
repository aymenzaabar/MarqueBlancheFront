import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessEchangeComponent } from './processEchange/processEchange.component';

const routes: Routes = [
  {

    path: "",
    component: ProcessEchangeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessEchangeRoutingModule { }
