import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { StepperfacComponent } from "./components/stepperfac/stepperfac.component";

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
      {
         path: "reactivation",
        loadChildren: () =>  import('./Modules/processReactivation/processReactivation.module').then(m => m.ProcessReactivationModule)
            },
      {
         path: "credentialssip",
        loadChildren: () =>  import('./Modules/credentialssip/credentialssip.module').then(m => m.CredentialssipModule)
            },
      {
         path: "ajoutpnom",
        loadChildren: () =>  import('./Modules/processAjoutPNom/processAjoutPNom.module').then(m => m.ProcessAjoutPNomModule)
            },  
      {
         path: "supressionpnom",
        loadChildren: () =>  import('./Modules/processSupprPNom/processSupprPNom.module').then(m => m.ProcessSupprPNomModule)
            },
      {
         path: "creationinternet",
        loadChildren: () =>  import('./Modules/processCreationInternet/processCreationInternet.module').then(m => m.ProcessCreationInternetModule)
            },       
      {
         path: "resilationinternet",
        loadChildren: () =>  import('./Modules/processResilationNet/processResilationNet.module').then(m => m.ProcessResilationNetModule)
            },   
      {
         path: "echange",
        loadChildren: () =>  import('./Modules/processEchange/processEchange.module').then(m => m.ProcessEchangeModule)
            },
      {
         path: "tracing",
        loadChildren: () =>  import('./Modules/tracing/tracing.module').then(m => m.TracingModule)
            },
      {
         path: "traceviewer",
        loadChildren: () =>  import('./Modules/traceviewer/traceviewer.module').then(m => m.TraceviewerModule)
            },
      {
         path: "dependencies",
        loadChildren: () =>  import('./Modules/dependencies/dependencies.module').then(m => m.DependenciesModule)
            }
           
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
  
  { path: 'step', component: StepperfacComponent },

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
