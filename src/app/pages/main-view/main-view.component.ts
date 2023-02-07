import { __values } from 'tslib';
import { Component, OnInit,inject } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';





// import { MainViewComponent } from './pages/main-view/main-view.component';
// import { Board } from 'src/app/models/board.model';
// import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
// export class AppComponent {
//   title = 'angular-dialog';
//   constructor(private MatDialog: MatDialog) { }
//   openDialog() {
//     this.MatDialog.open(DialogBodyComponent, {
//       width: '350px',
//     })

//   }
// }

export class MainViewComponent {
  ngOnInit() {

  }
 
  constructor(private matDialog: MatDialog) {}
  openDialog(){
    this.matDialog.open(DialogBodyComponent, {
      width: '350px',
    })

  }
 
inject(){}

  public todo: any[] = ['hello'];
  public inprogress: any[] = ['prompt'];
  public research: any[] = ['view'];
  public done: any[] = ['done'];
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
  public editTaskTodo(index: number) {

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
  // popup
  // constructor(private matDialog: MatDialog) { }
  // addToListButton() {
  //   this.matDialog.open(MainViewComponent, { width: '350px', })
  // }
 
  
  public addToListButton() {
    // properlly working as expected dont touch anything on this
    
    this.newTask = prompt("Enter Your Todo Task:");
    if (this.newTask == "" || this.newTask == null) {
      return;
    } else {
      this.todo.push(this.newTask);
      this.newTask = '';
    }
  }


  // added buttion to the side of todo prompt function


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



