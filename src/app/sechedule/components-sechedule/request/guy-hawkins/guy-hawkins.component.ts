import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-guy-hawkins',
  templateUrl: './guy-hawkins.component.html',
  styleUrl: './guy-hawkins.component.scss'
})
export class GuyHawkinsComponent {
  @Input() userData: any;
}
