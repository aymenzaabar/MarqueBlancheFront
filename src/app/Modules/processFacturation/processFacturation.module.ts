import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessFacturationRoutingModule } from './processFacturation-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProcessFacturationComponent } from './processFacturation/processFacturation.component';


@NgModule({
  declarations: [ProcessFacturationComponent],
  imports: [
    CommonModule,
    ProcessFacturationRoutingModule,
    
  ]
})
export class ProcessFacturationModule { }
