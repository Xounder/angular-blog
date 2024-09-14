import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component'
import { SmallCardComponent } from '../../components/small-card/small-card.component'
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component'
import { WelcomeCardComponent } from '../../components/welcome-card/welcome-card.component'

import { dataFake } from '../../data/data-fake';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent,
    WelcomeCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dataFake:any = dataFake
}
