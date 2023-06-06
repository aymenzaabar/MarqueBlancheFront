import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessCreationInternetComponent } from './processCreationInternet/processCreationInternet.component';

const routes: Routes = [
  {
    path: "",
    component: ProcessCreationInternetComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessCreationInternetRoutingModule { }
