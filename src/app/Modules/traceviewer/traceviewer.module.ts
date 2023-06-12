import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraceviewerRoutingModule } from './traceviewer-routing.module';
import { TraceviewerComponent } from './traceviewer/traceviewer.component';


@NgModule({
  declarations: [TraceviewerComponent],
  imports: [
    CommonModule,
    TraceviewerRoutingModule
  ]
})
export class TraceviewerModule { }
