import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// import { Board } from 'src/app/models/board.model';
// import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  ngOnInit() {

  }
  // constructor() {

  // }
  // board: Board = new Board('Test Board', [
  //   new Column('todo', [

  //   ]),
  //   new Column('research', [
  //   ]),
  //   new Column('inprogress', [
  //   ]),
  //   new Column('done', [
  //   ])
  // ]);


  public todo: any[] = ['hello'];
  public inprogress: any[] = ["hello"];
  public done: any[] = [];
  //temporary variable to 
  public newTask: any = '';





  // initial adding task at the begining remove because button for add task is applied to todo column

  // public addToList() {
  //   if (this.newTask !== '') {
  //     this.todo.push(this.newTask);
  //     this.newTask = '';
  //   }

  // }



  // editing task for the same item/index
  public editTask(index: number) {

    var found: any = this.todo.slice(index, index + 1);
    this.newTask = prompt("edit your task: ", found);
    if (this.newTask == null) {
      //same value will return if nothing changed
      this.todo[index] = found;

    } else {
      this.todo[index] = this.newTask;
      this.newTask = '';
    }

  }

  // added buttion to the side of todo prompt function
  public addToListButton() {
    // properlly working as expected dont touch anything on this
    // 
    this.newTask = prompt("Enter Your Todo Task:");
    if (this.newTask == "" || this.newTask == null) {
      return;
    } else {
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
  // delet
  public deleteTask(index: number) {
    this.todo.splice(index, 1);
  }
}



