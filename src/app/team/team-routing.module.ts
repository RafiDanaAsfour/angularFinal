import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamComComponent} from "../team/components-team/team-com/team-com.component";

const routes: Routes = [
  { path: ''
    , component: TeamComComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
