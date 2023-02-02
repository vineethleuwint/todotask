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

  // added buttion to the side of todo prompt function
  public addToListButton() {

    this.newTask = prompt("Enter Your Todo Task:");
    if (this.newTask === '') {
      this.todo.push(this.newTask);
      this.newTask = '';
    } 
  }
  // editing task for the same item/index
  public editTask(index: number) {
    // let valueOfArray = this.todo.indexOf(index);
    // this.newTask = prompt("Edit your Todo Task:",this.todo.);
    // // this.todo.push(this.newTask);
    // // this.newTask = '';
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



