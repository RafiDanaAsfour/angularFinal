import { Component } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss'
})
export class RequestComponent {
  activeTab: string = 'request';

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  components = [
    { component: 'SupercoolComponent', data: { }},
    { component: 'GuyHawkinsComponent', data: { } },
    { component: 'RonaldRichardsComponent', data: { } }
  ];
}
