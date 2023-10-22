import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessFacturationRoutingModule } from './processFacturation-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProcessFacturationComponent } from './processFacturation/processFacturation.component';
import { FileStreamComponent } from './stream/file-stream/file-stream.component';


@NgModule({
  declarations: [ProcessFacturationComponent, FileStreamComponent],
  imports: [
    CommonModule,
    ProcessFacturationRoutingModule,
    
  ]
})
export class ProcessFacturationModule { }
