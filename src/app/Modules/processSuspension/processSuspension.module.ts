import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessSuspensionRoutingModule } from './processSuspension-routing.module';
import { ProcessSuspensionComponent } from './processSuspension/processSuspension.component';


@NgModule({
  declarations: [
    ProcessSuspensionComponent
  ],
  imports: [
    CommonModule,
    ProcessSuspensionRoutingModule
  ]
})
export class ProcessSuspensionModule { }
