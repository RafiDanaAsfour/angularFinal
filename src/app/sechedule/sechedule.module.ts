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

import {UserCardComponent} from "./components-sechedule/request/user-card/user-card.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {PaginationComponent} from "./components-sechedule/request/pagination/pagination.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    SecheduleComComponent,
    RequestComponent,
    AlendarComponent,
    BlockedDaysComponent,
    AllLocationComponent,
    SortComponent,
    AddTimeOffComponent,
    UserCardComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SecheduleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule


  ]


})
export class SecheduleModule { }
