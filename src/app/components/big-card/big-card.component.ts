import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  // default params
  @Input()
  photoCover:string = 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'
  @Input()
  title:string = ''
  @Input()
  description:string = ''
  @Input()
  providerPhoto:string = 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png'
  @Input()
  providerName:string = 'Anonymous'
  @Input()
  contentGenre:string = 'N/A'
  @Input()
  timeReading:string = '1'
  @Input()
  id:string = '0'
  constructor(){}
}
