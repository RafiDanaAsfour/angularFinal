import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecheduleComComponent } from './components-sechedule/sechedule-com/sechedule-com.component';

const routes: Routes = [
  { path: ''
    , component: SecheduleComComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecheduleRoutingModule { }
