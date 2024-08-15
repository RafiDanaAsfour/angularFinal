import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeshboardComComponent } from './components-dashboard/deshboard-com/deshboard-com.component';

const routes: Routes = [
  { path: ''
    , component: DeshboardComComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
