import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecheduleComComponent } from './components-sechedule/sechedule-com/sechedule-com.component';
import {SecheduleRoutingModule} from './sechedule-routing.module';
import { RequestComponent } from './components-sechedule/request/request.component';
import { AlendarComponent } from './components-sechedule/calendar/alendar.component';
import { BlockedDaysComponent } from './components-sechedule/blocked-days/blocked-days.component';

@NgModule({
  declarations: [
    SecheduleComComponent,
    RequestComponent,
    AlendarComponent,
    BlockedDaysComponent
  ],
  imports: [
    CommonModule,
    SecheduleRoutingModule
  ]


})
export class SecheduleModule { }
