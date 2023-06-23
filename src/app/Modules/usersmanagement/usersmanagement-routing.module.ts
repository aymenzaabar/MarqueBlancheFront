import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersmanagementComponent } from './usersmanagement/usersmanagement.component';

const routes: Routes = [
  {

    path: "",
    component: UsersmanagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersmanagementRoutingModule { }
