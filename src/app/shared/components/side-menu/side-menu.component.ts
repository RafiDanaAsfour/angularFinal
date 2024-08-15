import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  menuItems = [
    { name: 'Dashboard', route: '/dashboard', icon: 'assets/dashboard-icon.png' },
    { name: 'Schedule', route: '/schedule', icon: 'assets/schedule-icon.png' },
    { name: 'Team', route: '/team', icon: 'assets/team-icon.png' }
  ];

}
