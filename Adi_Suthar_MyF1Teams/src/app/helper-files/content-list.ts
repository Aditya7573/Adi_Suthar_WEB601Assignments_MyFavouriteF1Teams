// src/app/helper-files/content-list.ts
import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {}

  get content(): Content[] {
    return this.contentArray;
  }

  add(contentItem: Content): void {
    this.contentArray.push(contentItem);
  }

  count(): number {
    return this.contentArray.length;
  }

  displayAtIndex(index: number): string {
    if (index < 0 || index >= this.contentArray.length) {
      return '<p>Error: Index out of range</p>';
    }

    const contentItem = this.contentArray[index];
    return `
      <div>
        <h2>${contentItem.title}</h2>
        <p>${contentItem.description}</p>
        <p>Creator: ${contentItem.creator}</p>
        ${contentItem.imgURL ? `<img src="${contentItem.imgURL}" alt="Image">` : ''}
        <p>Type: ${contentItem.type || 'N/A'}</p>
      </div>
    `;
  }
}
