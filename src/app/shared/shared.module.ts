import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HedarComponent } from './components/hedar/hedar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuItemComponent } from './components/side-menu-item/side-menu-item.component';
import { AccountComponent } from './components/account/account.component';
import {RouterLink, RouterLinkActive} from "@angular/router";

import { ReactiveFormsModule } from '@angular/forms';
import {LoaderComponent} from "./loader/loader.component";



@NgModule({
  declarations: [
    HedarComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    AccountComponent,
    LoaderComponent
  ],
  exports: [
    HedarComponent,
    SideMenuComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule

  ]
})
export class SharedModule { }
