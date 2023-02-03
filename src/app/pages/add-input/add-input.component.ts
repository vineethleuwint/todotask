import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.scss'],
})
export class AddInputComponent {
  @Output() itemTransfer = new EventEmitter<string>();
  enteredInput = '';

  onCreateItem() {
    console.log('Added item: ' + this.enteredInput);
    this.itemTransfer.emit(this.enteredInput);
    this.enteredInput = '';
  }
}
