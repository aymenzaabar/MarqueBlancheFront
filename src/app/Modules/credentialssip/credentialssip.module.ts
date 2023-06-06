import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialssipRoutingModule } from './credentialssip-routing.module';
import { CredentialssipComponent } from './credentialssip/credentialssip.component';


@NgModule({
  declarations: [CredentialssipComponent],
  imports: [
    CommonModule,
    CredentialssipRoutingModule
  ]
})
export class CredentialssipModule { }
