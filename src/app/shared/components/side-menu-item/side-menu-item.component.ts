import { Component ,Input,HostListener} from '@angular/core';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrl: './side-menu-item.component.scss'
})
export class SideMenuItemComponent {
  @Input() item:any;
  isActive = false;

  @HostListener('click') onClick() {
    this.isActive = !this.isActive;
  }
}
