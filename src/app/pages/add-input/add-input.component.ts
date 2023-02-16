import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.scss'],
})
export class AddInputComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public postJsonValue: any;

  public postMethod(value: string) {
    let body = {
      items: value,
    };
    this.http
      .post('http://localhost:8080/newitem', body.items)
      .subscribe((data: any) => {
        console.log(body);
        this.postJsonValue = data;
      });
  }

  @Output() itemTransfer = new EventEmitter<string>();
  enteredInput: string;

  onCreateAndPostItem(data: any) {
    // console.log(data.itemName);
    this.postMethod(data.itemName);
    this.enteredInput = data.itemName;
    this.itemTransfer.emit(this.enteredInput);
    this.enteredInput = '';
  }
}
