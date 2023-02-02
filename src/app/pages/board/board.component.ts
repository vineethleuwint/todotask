import { Component } from '@angular/core';
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
  board: Board = new Board('Test Board', [
    new Column('To Do', [
      'Learn Angular',
      'Learn Routing',
      'Learn Cross Component Communication',
    ]),
    new Column('Research', [
      'Kanban Board Working',
      'Learn property binding',
      'Add an item',
    ]),
    new Column('In-Progress', [
      'Styling Kanban App',
      'To add delete functionality',
      'Pop Alert for confirmation',
    ]),
    new Column('Completed', ['Added scss', 'Dynamic Columns']),
  ]);

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
}
