import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersmanagementRoutingModule } from './usersmanagement-routing.module';
import { UsersmanagementComponent } from './usersmanagement/usersmanagement.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropComponent } from './drag-drop/drag-drop.component';


@NgModule({
  declarations: [UsersmanagementComponent,DragDropComponent],
  imports: [
    CommonModule,
    UsersmanagementRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UsersmanagementModule { }
