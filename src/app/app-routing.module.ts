import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./log/log.module').then(m => m.LogModule)
  },
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
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
