import { Component } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent {
  constructor() {}
  todo: string[] = [
    'Learn Angular',
    'Learn Routing',
    'Learn Cross Component Communication',
  ];
  research: string[] = [
    'Kanban Board Working',
    'Learn property binding',
    'Add an item',
  ];
  inprogress: string[] = [
    'Styling Kanban App',
    'To add delete functionality',
    'Pop Alert for confirmation',
  ];
  completed: string[] = ['Added scss', 'Dynamic Columns'];
}
