import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecheduleComComponent } from './components-sechedule/sechedule-com/sechedule-com.component';
import {SecheduleRoutingModule} from './sechedule-routing.module';
import { RequestComponent } from './components-sechedule/request/request.component';
import { AlendarComponent } from './components-sechedule/calendar/alendar.component';
import { BlockedDaysComponent } from './components-sechedule/blocked-days/blocked-days.component';
import { AllLocationComponent } from './components-sechedule/request/all-location/all-location.component';
import { SortComponent } from './components-sechedule/request/sort/sort.component';
import { AddTimeOffComponent } from './components-sechedule/request/add-time-off/add-time-off.component';
import {SupercoolComponent} from "./components-sechedule/request/supercool/supercool.component";
import {GuyHawkinsComponent} from "./components-sechedule/request/guy-hawkins/guy-hawkins.component";
import {RonaldRichardsComponent} from "./components-sechedule/request/ronald-richards/ronald-richards.component";

@NgModule({
  declarations: [
    SecheduleComComponent,
    RequestComponent,
    AlendarComponent,
    BlockedDaysComponent,
    AllLocationComponent,
    SortComponent,
    AddTimeOffComponent,
    SupercoolComponent,
    GuyHawkinsComponent,
    RonaldRichardsComponent
  ],
  imports: [
    CommonModule,
    SecheduleRoutingModule,
  ]


})
export class SecheduleModule { }
