import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DependenciesModule } from './dependencies.module';
import { DependenciesComponent } from './dependencies/dependencies.component';

const routes: Routes = [
  {

    path: "",
    component: DependenciesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependenciesRoutingModule { }
