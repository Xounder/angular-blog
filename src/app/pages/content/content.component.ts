import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule} from '@angular/router';
import { dataFake } from '../../data/data-fake'


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  private id:string | null = '0'
  title:string = ''
  photo:string = ''
  content:string = ''

  constructor(private activeRoute:ActivatedRoute){}

  ngOnInit(): void{
    this.activeRoute.paramMap.subscribe(value => this.id = value.get('id'))
    this.setValuesToContent()
  }

  setValuesToContent():void {
    const result = dataFake.filter(value => value.id === this.id)[0]
    this.title = result.title
    this.photo = result.photo
    this.content = result.content
  }
}
