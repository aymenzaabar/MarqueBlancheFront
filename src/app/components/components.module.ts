import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

import { RouterModule } from "@angular/router";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { DxVectorMapModule, DxPieChartModule } from 'devextreme-angular';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StepperfacComponent } from './stepperfac/stepperfac.component';
import { LogsComponent } from './logs/logs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    DxVectorMapModule,
    DxPieChartModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    StepperfacComponent,
    LogsComponent,
    
    
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ComponentsModule {}
