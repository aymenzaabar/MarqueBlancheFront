import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessAjouPNomComponent } from './processAjoutPNom/processAjoutPNom.component';

const routes: Routes = [
  {

    path: "",
    component: ProcessAjouPNomComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessAjoutPNomRoutingModule { }
