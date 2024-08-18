import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ronald-richards',
  templateUrl: './ronald-richards.component.html',
  styleUrl: './ronald-richards.component.scss'
})
export class RonaldRichardsComponent {
  @Input() userData: any;
}
