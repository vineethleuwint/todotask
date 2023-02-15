import { MainViewComponent } from './../main-view/main-view.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})

export class DialogBodyComponent {
  // @Input() fromMainViesList: string[];
  //on save variable for ngmodule in input inside the dialog
  onSaveVariable: any='';
  // @Input() newTask: any;
  @Output() MessageEvent = new EventEmitter<string>();

  public hello: any;
  sendMessage() {
    // if (this.onSaveVariable !== '') {
    //   // this.newTask.push(this.onSaveVariable);
    //   this.MessageEvent.emit(this.onSaveVariable);
    //   this.onSaveVariable = '';
    // }
  }
  constructor() { }

}


