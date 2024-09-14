import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  // default params
  @Input()
  photoCover:string = ''
  @Input()
  title:string = ''
  @Input()
  description:string = ''
  @Input()
  providerPhoto:string = ''
  @Input()
  providerName:string = ''
  @Input()
  contentGenre:string = ''
  @Input()
  timeReading:string = ''
  @Input()
  id:string = '0'
  
  constructor(){}

  ngOnInit():void {
    if (!this.photoCover){
      this.photoCover = 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'
    }
    if (!this.providerPhoto){
      this.providerPhoto = 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png'
    }
    if (!this.providerName){
      this.providerName = 'Anonymous'
    }
    if (!this.contentGenre){
      this.contentGenre = 'N/A'
    }
    if (!this.timeReading){
      this.timeReading = '1 min'
    }
  }
}
