import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DeshboardComComponent } from './dashboard/components-dashboard/deshboard-com/deshboard-com.component';
// import { SecheduleComComponent } from './sechedule/components-sechedule/sechedule-com/sechedule-com.component';
// import { TeamComComponent } from './team/components-team/team-com/team-com.component';

// const routes: Routes = [
//   // { path: 'dashboard', component: DeshboardComComponent },
//   // { path: 'schedule', component: SecheduleComComponent },
//   // { path: 'team', component: TeamComComponent },
// ];


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./sechedule/sechedule.module').then(m => m.SecheduleModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
