import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-supercool',
  templateUrl: './supercool.component.html',
  styleUrl: './supercool.component.scss'
})
export class SupercoolComponent {
  @Input() userData: any;

}
