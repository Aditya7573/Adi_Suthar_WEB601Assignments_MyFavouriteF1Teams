/* // src/app/content-card/content-card.component.ts
import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.add({
      id: 1,
      title: 'Lewis Hamilton',
      description: 'Seven-time Formula 1 World Champion',
      creator: 'Mercedes-AMG Petronas Formula One Team',
      imgURL: 'assets/img/lewis_hamilton.jpg',
      type: 'Driver',
    });
  
    this.contentList.add({
      id: 2,
      title: 'Scuderia Ferrari',
      description: 'One of the oldest and most successful teams in F1',
      creator: 'Scuderia Ferrari',
      imgURL: 'assets/img/Ferrari.jpg',
      type: 'Team',
    });
  
    this.contentList.add({
      id: 3,
      title: 'Monaco Grand Prix',
      description: 'Iconic street circuit race held annually in Monte Carlo',
      creator: 'Automobile Club de Monaco',
      imgURL: 'assets/img/monaco_gp.jpg',
      type: 'Race',
    });
  }
  

  ngOnInit(): void {}
}
 */