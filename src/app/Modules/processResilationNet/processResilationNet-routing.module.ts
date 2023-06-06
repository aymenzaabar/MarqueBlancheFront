import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessResilationNetComponent } from './processResilationNet/processResilationNet.component';

const routes: Routes = [
  {

    path: "",
    component: ProcessResilationNetComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessResilationNetRoutingModule { }
