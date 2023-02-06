import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import { Tasks } from 'src/app/models/tasks.model';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
@Injectable()
export class MainViewComponent implements OnInit {
  
  public minDate: Date = new Date ("01/01/2023 2:00 AM");
 
  public maxDate: Date = new Date ("01/01/2024 11:00 AM");

  public dateValue: Date = new Date ("");
  private storageName: string = "Settings";
  constructor() { }

  
  setSettings(data: any) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }
  clearUserSettings() {
    localStorage.removeItem(this.storageName);
  }
  cleanAll() {
    localStorage.clear()
  }
  getUserSettings() {
    let data = localStorage.getItem(this.storageName);
    return JSON.stringify(data);
  }

  board: Board = new Board('Test Board', [
    new Column('todo' , [ new Tasks('todoname' ,[]),
      
      ]), 
    new Column('research' , [ new Tasks('researchname' ,[]),
    
    ]),
    new Column('inprogress' ,[ new Tasks('inprogressname' ,[]),
    
  ]),
  new Column('done' , [ new Tasks('donename' ,[]),
    
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

  //Add Name
  public todoname : string[] =[];
public researchname : string[] =[];
public inprogressname : string[] =[];
public donename : string[] =[];


  public newTodoName :any="";
  public newResearchName :any="";
  public newInprogressName :any="";
  public newDoneName :any="";
    public TodoName() {
      if (this.newTodoName == '') {
      alert
      ("Sorry no name found...Please Add A Name and Try Again");
      }
      else {
          this.todoname.push(this.newTodoName);
          this.newTodoName = '';
      }
    }
    public ResearchName() {
      if (this.newResearchName == '') {
      alert
      ("Sorry no name found...Please Add A Name and Try Again");
      }
      else {
          this.researchname.push(this.newResearchName);
          this.newResearchName = '';
      }
    }
    public InprogressName() {
      if (this.newInprogressName == '') {
      alert
      ("Sorry no name found...Please Add A Name and Try Again");
      }
      else {
          this.inprogressname.push(this.newInprogressName);
          this.newInprogressName = '';
      }
    }
    public DoneName() {
      if (this.newDoneName == '') {
      alert
      ("Sorry no name found...Please Add A Name and Try Again");
      }
      else {
          this.donename.push(this.newDoneName);
          this.newDoneName = '';
      }
    }
}
