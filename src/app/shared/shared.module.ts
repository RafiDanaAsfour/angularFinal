import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HedarComponent } from './components/hedar/hedar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuItemComponent } from './components/side-menu-item/side-menu-item.component';



@NgModule({
  declarations: [
    HedarComponent,
    SideMenuComponent,
    SideMenuItemComponent
  ],
  exports: [
    HedarComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
