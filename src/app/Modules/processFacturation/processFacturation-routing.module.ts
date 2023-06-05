import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessFacturationComponent } from './processFacturation/processFacturation.component';

const routes: Routes = [
  {

        path: "",
        component: ProcessFacturationComponent
      },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessFacturationRoutingModule { }
