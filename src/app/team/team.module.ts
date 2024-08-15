import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComComponent } from './components-team/team-com/team-com.component';
import {TeamRoutingModule} from "./team-routing.module";

@NgModule({
  declarations: [
    TeamComComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
