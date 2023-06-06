import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessSupprPNomComponent } from './process-suppr-pnom/processSupprPNom.component';

const routes: Routes = [
  {

    path: "",
    component: ProcessSupprPNomComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessSupprPNomRoutingModule { }
