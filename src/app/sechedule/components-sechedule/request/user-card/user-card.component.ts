import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input() userData!: {
    name: string;
    by: string;
    dateSubmitted: string;
    category: string;
    timeRequested: string;
    status: string;
    imgSrc: string;
    statusIcon: string;
  };

}
