import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  constructor() {
    this.columnName = '';
  }

  @Input() columnName: string;
  @Input() listFromMainView: string[];

  //Drag and drop functionalties.
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onItemCreated(itemName: string) {
    if (itemName === '') {
      alert('No Text Found.');
    } else {
      this.listFromMainView.push(itemName);
    }

    console.log(this.listFromMainView);
  }

  onItemDelete(index: number) {
    this.listFromMainView.splice(index, 1);
  }
}
