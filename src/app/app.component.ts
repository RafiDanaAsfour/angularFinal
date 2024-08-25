import { Component } from '@angular/core';
import {AuthService} from "./log/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public authService: AuthService) {}
  title = 'final-angular';
}
