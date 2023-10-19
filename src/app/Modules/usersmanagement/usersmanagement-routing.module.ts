import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersmanagementComponent } from './usersmanagement/usersmanagement.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';


const routes: Routes = [
  {

    path: "",
    component: UsersmanagementComponent
  },
  {

    path: "drag",
    component: DragDropComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersmanagementRoutingModule { }
