import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BigCardComponent } from '../app/components/big-card/big-card.component'
import { SmallCardComponent } from '../app/components/small-card/small-card.component'
import { WelcomeCardComponent } from '../app/components/welcome-card/welcome-card.component'
import { MenuBarComponent } from '../app/components/menu-bar/menu-bar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BigCardComponent, SmallCardComponent, WelcomeCardComponent, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
