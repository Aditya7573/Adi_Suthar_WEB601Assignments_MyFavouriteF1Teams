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
      title: 'A',
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
      type: 'Racing',
      tags: ['Red Bull', 'F1', 'Austrian Racing']
    },
    {
      id: 4,
      title: 'McLaren F1 Team',
      description: 'Follow the journey of McLaren f1 Team and their quest for championships.',
      creator: 'Aditya Suthar',
      imgURL: 'assets/img/monaco_gp.jpg',
      type: 'Race',
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
    {
      "id": 6,
      "title": "Williams Racing",
      "description": "Explore the historic journey of Williams Racing in Formula 1.",
      "creator": "Aditya Suthar",
      "imgURL": "assets/img/Ferrari.jpg",
      "type": "Team",
      "tags": ["Williams", "F1", "British Racing"]
    },
    {
      "id": 7,
      "title": "Haas F1 Team",
      "description": "Follow the challenges and victories of Haas F1 Team in the world of Formula 1.",
      "creator": "Aditya Suthar",
      "imgURL": "assets/img/Ferrari.jpg",
      "type": "Team",
      "tags": ["Haas", "Formula 1", "American Racing"]
    }
    
    // Add more content items as needed
  ];
  searchTitle: string = ''; // Add this line
  searchResult: string = ''; // Add this line
  authorToSearch: string = ''; // Add this line
  authorSearchMessage: { found: boolean, message: string } = { found: false, message: '' }; // Add this line

  // Add the searchContent method
// Update the searchContent method
searchContent() {
  const searchTerm = this.searchTitle.toLowerCase(); // Convert to lowercase for case-insensitivity
  this.searchResult = this.contentItems.some(content => content.title.toLowerCase().includes(searchTerm))
    ? 'Content found!'
    : 'Content not found.';
}

constructor() {}

  ngOnInit(): void {}
}  //