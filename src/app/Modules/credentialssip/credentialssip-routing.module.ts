import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialssipComponent } from './credentialssip/credentialssip.component';

const routes: Routes = [
  {

    path: "",
    component: CredentialssipComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredentialssipRoutingModule { }
