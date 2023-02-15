import { FormsModule } from '@angular/forms';
import { Component, NgModule } from '@angular/core';



@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent {
  dateSelected: any;
  fetchDateSelected() {
    console.log(this.dateSelected)
  }
}
