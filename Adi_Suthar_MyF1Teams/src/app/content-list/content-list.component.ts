// src/app/content-list/content-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentItems: Content[] = [
    {
      id: 1,
      title: 'Mercedes-AMG Petronas Formula One Team',
      description: 'Explore the dominance of Mercedes in recent Formula 1 seasons.',
      creator: 'Aditya Suthar',
      imgURL: 'assets/img/lewis_hamilton.jpg',
      type: 'Team',
      tags: ['Mercedes', 'F1', 'Champions']
    },
    {
      id: 2,
      title: 'Scuderia Ferrari',
      description: 'Discover the rich history and legacy of the iconic Ferrari F1 team.',
      creator: 'Aditya Suthar',
      imgURL: 'assets/img/lewis_hamilton.jpg',
      type: 'Team',
      tags: ['Ferrari', 'Formula 1', 'Italian Racing']
    },
    {
      id: 3,
      title: 'Red Bull Racing',
      description: 'Follow the journey of Red Bull Racing and their quest for championships.',
      creator: 'Aditya Suthar',
      imgURL: 'assets/img/Ferrari.jpg',
      type: 'Team',
      tags: ['Red Bull', 'F1', 'Austrian Racing']
    },
    {
      id: 4,
      title: 'McLaren F1 Team',
      description: 'Follow the journey of McLaren f1 Team and their quest for championships.',
      creator: 'Aditya Suthar',
      imgURL: 'assets/img/monaco_gp.jpg',
      type: 'Team',
      tags: ['McLaren', 'Formula 1', 'British Racing']
    },
    {
      id: 5,
      title: 'Alfa Romeo Racing Orlen',
      description: 'Follow the journey of Alfa Romeo Racing and their quest for championships.',
      creator: 'Aditya Suthar',
      imgURL: 'assets/img/Ferrari.jpg',
      type: 'Team',
      tags: ['Alfa Romeo', 'F1', 'Italian Racing']
    },
    // Add more content items as needed
  ];

  constructor() {}

  ngOnInit(): void {}
}
