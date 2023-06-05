import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "presentation",
    pathMatch: "full"
  },
  /*{
    path: "login",
    component: LoginComponent
  },*/
  
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "facturation",
        loadChildren: () =>  import('./Modules/processFacturation/processFacturation.module').then(m => m.ProcessFacturationModule)
            },
      {
         path: "suspension",
        loadChildren: () =>  import('./Modules/processSuspension/processSuspension.module').then(m => m.ProcessSuspensionModule)
            },
     
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  },
  
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
