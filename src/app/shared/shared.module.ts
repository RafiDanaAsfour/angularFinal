import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HedarComponent } from './components/hedar/hedar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuItemComponent } from './components/side-menu-item/side-menu-item.component';
import { AccountComponent } from './components/account/account.component';
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
  declarations: [
    HedarComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    AccountComponent,
  ],
  exports: [
    HedarComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class SharedModule { }
