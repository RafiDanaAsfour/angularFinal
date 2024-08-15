import { Component } from '@angular/core';

@Component({
  selector: 'app-sechedule-com',
  templateUrl: './sechedule-com.component.html',
  styleUrl: './sechedule-com.component.scss'
})
export class SecheduleComComponent {
  activeTab: string = 'request';

  selectTab(tab: string) {
    this.activeTab = tab;
  }

}
