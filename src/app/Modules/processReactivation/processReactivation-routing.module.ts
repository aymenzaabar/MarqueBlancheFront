import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessReactivationComponent } from './processReactivation/processReactivation.component';
const routes: Routes = [
  {

    path: "",
    component: ProcessReactivationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessReactivationRoutingModule { }
