import { __values } from 'tslib';
import { Component, OnInit, inject, ViewChild, AfterViewInit, Injectable } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';
import { Data } from '@angular/router';







// import { MainViewComponent } from './pages/main-view/main-view.component';
// import { Board } from 'src/app/models/board.model';
// import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
@Injectable()
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


  constructor(private matDialog: MatDialog, private data: DataService) { }
  name: string = '';

  public newTask: any = '';
  openDialog() {
    // [this.newTask] = this.newTask;
    this.matDialog.open(DialogBodyComponent, {
      width: '350px', data: { name: this.todo }
    })
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');
    //     this.todo = result;
    //   });
    // }
  };






  inject() { }

  public todo: any[] = ['hello'];
  public inprogress: any[] = ['prompt'];
  public research: any[] = ['view'];
  public done: any[] = ['done'];
  //temporary variable to 


  // initial adding task at the begining remove because button for add task is applied to todo column

  public addToListTodo() {
    if (this.newTask !== '') {
      this.todo.push(this.newTask);
      this.newTask = '';
    }

  }
  public addToListResearch() {
    if (this.newTask !== '') {
      this.research.push(this.newTask);
      this.newTask = '';
    }

  }
  public addToListInprogress() {
    if (this.newTask !== '') {
      this.inprogress.push(this.newTask);
      this.newTask = '';
    }

  }
  public addToListDone() {
    if (this.newTask !== '') {
      this.done.push(this.newTask);
      this.newTask = '';
    }

  }


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

  // original code
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



