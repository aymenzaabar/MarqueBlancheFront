import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessReactivationComponent } from './processReactivation/processReactivation.component';
import { ProcessReactivationRoutingModule } from './processReactivation-routing.module';

@NgModule({
  declarations: [
    ProcessReactivationComponent
  ],
  imports: [
    CommonModule,
    ProcessReactivationRoutingModule
  ]
})
export class ProcessReactivationModule { }
