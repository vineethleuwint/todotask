import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('todo' , [
      'Do Your Researches',
      ]), 
    new Column('research' , [
    'Do Your Researches',
    ]),
    new Column('inprogress' ,[
    'Add Your Progress Here'
  ]),
  new Column('done' , [
    'All Events are done'
  ])
]);

public todo : string[] =[];
public research : string[] =[];
public inprogress : string[] =[];
public done : string[] =[];

//Add Functions

public newTask :any="";
public addTotodo() {
  if (this.newTask == '') {
  alert
  ("Sorry no text found");
  }
  else {
      this.todo.push(this.newTask);
      this.newTask = '';
  }
}
public addToresearch() {
  if (this.newTask == '') {
    alert
  ("Sorry no text found");
  }
  else {
      this.research.push(this.newTask);
      this.newTask = '';
  }
}
public addToinprogress() {
  if (this.newTask == '') {
    alert
  ("Sorry no text found");
  }
  else {
      this.inprogress.push(this.newTask);
      this.newTask = '';
  }
}
public addTodone() {
  if (this.newTask == '') {
    alert
  ("Sorry no text found");
  }
  else {
      this.done.push(this.newTask);
      this.newTask = '';
  }
}
//Edit functions
public edittodo(index:number)
{
  if (this.newTask == '') {
    
    alert("No changes done");

  } else {
    this.todo[index] = this.newTask;
    this.newTask = '';
  }
}
public editresearch(index:number)
{
  if (this.newTask == '') {
    
    alert("No changes done");

  } else {
    this.research[index] = this.newTask;
    this.newTask = '';
  }
}
public editinprogress(index:number)
{
  if (this.newTask == '') {
    
    alert("No changes done");

  } else {
    this.inprogress[index] = this.newTask;
    this.newTask = '';
  }
}
public editdone(index:number)
{
  if (this.newTask == '') {
    
    alert("No changes done");

  } else {
    this.done[index] = this.newTask;
    this.newTask = '';
  }
}

ngOnInit() {
}
//Drop function

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }

  // Delete Functions

  public deletetodo(index:number) {
    this.todo.splice(index, 1);
  }
  public deleteresearch(index:number) {
    this.research.splice(index, 1);
  }
  public deleteinprogress(index:number) {
    this.inprogress.splice(index, 1);
  }
  public deletedone(index:number) {
    this.done.splice(index, 1);
  }
}


