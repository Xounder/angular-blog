import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from '../app/pages/home/home.component'
import { MenuBarComponent } from '../app/components/menu-bar/menu-bar.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    MenuBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
