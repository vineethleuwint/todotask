import { Component, OnInit ,Inject} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import { Tasks } from 'src/app/models/tasks.model';
import { Injectable } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'

export interface DialogData {
  name: string;
  
}
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
@Injectable()
export class MainViewComponent implements OnInit {
  public name: string="";

  public minDate: Date = new Date ("01/01/2023 2:00 AM");
 
  public maxDate: Date = new Date ("01/01/2024 11:00 AM");

  public dateValue: Date = new Date ("");

  //Add name from Dialog
  constructor(public dialog:MatDialog) { }

  openTodoDialog(): void { 
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, { width:'350px',
      data: {name: this.todoname},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.todoname = result;
    });
  }
  openResearchDialog(): void { 
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, { width:'350px',
      data: {name: this.researchname},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.researchname = result;
    });
  }
  openInprogressDialog(): void { 
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, { width:'350px',
      data: {name: this.inprogressname},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.inprogressname = result;
    });
  }
  openDoneDialog(): void { 
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, { width:'350px',
      data: {name: this.donename},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.donename = result;
    });
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
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}