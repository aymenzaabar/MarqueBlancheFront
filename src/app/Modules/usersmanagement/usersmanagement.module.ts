import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersmanagementRoutingModule } from './usersmanagement-routing.module';
import { UsersmanagementComponent } from './usersmanagement/usersmanagement.component';


@NgModule({
  declarations: [UsersmanagementComponent],
  imports: [
    CommonModule,
    UsersmanagementRoutingModule
  ]
})
export class UsersmanagementModule { }
