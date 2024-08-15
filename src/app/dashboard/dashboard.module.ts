import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeshboardComComponent } from './components-dashboard/deshboard-com/deshboard-com.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DeshboardComComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
