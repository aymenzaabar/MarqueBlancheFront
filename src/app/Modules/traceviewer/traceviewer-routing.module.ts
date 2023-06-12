import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraceviewerComponent } from './traceviewer/traceviewer.component';

const routes: Routes = [
  {

    path: "",
    component: TraceviewerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraceviewerRoutingModule { }
