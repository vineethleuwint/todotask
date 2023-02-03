import { Component, Input } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
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
  @Input() columnName: string;
  constructor() {
    this.columnName = '';
  }

  @Input() listFromMainView: string[];

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
    this.listFromMainView.push(itemName);
  }
}
