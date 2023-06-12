import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TracingComponent } from './tracing/tracing.component';

const routes: Routes = [
  {

    path: "",
    component: TracingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracingRoutingModule { }
