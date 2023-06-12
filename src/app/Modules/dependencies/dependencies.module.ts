import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependenciesRoutingModule } from './dependencies-routing.module';
import { DependenciesComponent } from './dependencies/dependencies.component';


@NgModule({
  declarations: [DependenciesComponent],
  imports: [
    CommonModule,
    DependenciesRoutingModule
  ]
})
export class DependenciesModule { }
