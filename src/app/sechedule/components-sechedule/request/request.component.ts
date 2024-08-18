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

  users = [
    {
      name: 'Supercool',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      status: 'Approved',
      imgSrc: 'assets/girl.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },
    {
      name: 'Guy Hawkins',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      status: 'Approved',
      imgSrc: 'assets/woman1.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },
    {
      name: 'Ronald Richards',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      status: 'Approved',
      imgSrc: 'assets/delivery-boy.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },
    {
      name: 'Jacob Jones',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      status: 'Approved',
      imgSrc: 'assets/woman2.png',
      statusIcon: 'assets/Green_icon.svg.png'
    }

  ];
}
