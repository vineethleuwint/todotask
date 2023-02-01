import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {
  ngOnInit() {

  }
  public todo: any[] = [];
  public inprogress: any[] = ["helo"];
  public done: any[] = [];
  //temporary variable to 
  public newTask = '';


  public addToList() {
    if (this.newTask !== '') {
      this.todo.push(this.newTask);
      this.newTask = '';
    }
    
  }



  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  research = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,);
    }
  }
  public deleteTask(index: number) {
    this.todo.splice(index, 1);
  }
}



