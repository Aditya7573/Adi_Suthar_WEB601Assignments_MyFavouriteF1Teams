// content-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent {
  contentArray = [
    {
      id: 1,
      title: 'F1 Race 1',
      image: 'assets/img/lewis_hamilton.jpg',
      description: 'Exciting F1 race with intense battles.',
      creator: 'F1 Racing Team',
  
      tags: ['Exciting', 'Intense', 'F1'],
    },
    {
      id: 2,
      title: 'F1 Race 2',
      image: 'assets/img/Ferrari.jpg',
      description: 'High-speed F1 race on a challenging circuit.',
      creator: 'Speedy Racers',
      type: 'Race',
      tags: ['High Speed', 'Challenging', 'F1'],
    },
    {
      id: 3,
      title: 'F1 Documentary',
      image: 'assets/img/monaco_gp.jpg',
      description: 'Behind the scenes of the F1 world and its legends.',
      creator: 'Documentary Productions',
      type: 'Documentary',
      tags: ['Insightful', 'Legends', 'F1'],
    },
    {
      id: 4,
      title: 'F1 Championship Highlights',
      image: 'assets/img/lewis_hamilton.jpg',
      description: 'Recap of the thrilling moments from the F1 championship.',
      creator: 'Sports Network',
      type: 'Highlights',
      tags: ['Thrilling', 'Championship', 'F1'],
    },
    {
      id: 5,
      title: 'F1 Team Profile',
      image: 'assets/img/Ferrari.jpg',
      description: 'Learn about the history and achievements of an F1 team.',
      creator: 'Team Profiles Ltd.',
      type: 'Profile',
      tags: ['History', 'Achievements', 'F1'],
    }
    // Add more F1 content items as needed
  ];

  handleImageClick(id: number, title: string) {
    console.log(`Clicked on image with ID: ${id} and Title: ${title}`);
  }
}
