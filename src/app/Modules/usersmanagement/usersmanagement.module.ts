import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersmanagementRoutingModule } from './usersmanagement-routing.module';
import { UsersmanagementComponent } from './usersmanagement/usersmanagement.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersmanagementComponent],
  imports: [
    CommonModule,
    UsersmanagementRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UsersmanagementModule { }
