import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  public getJsonValue: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod() {
    this.http.get('http://localhost:8080').subscribe((data) => {
      console.log(data);
      this.getJsonValue = data;
    });
  }

  //Arrays
  todo: string[] = [
    'Learn Angular',
    'Learn Routing',
    'Learn Cross Component Communication',
  ];
  research: string[] = [
    'Kanban Board Working',
    'Learn property binding',
    'Add an item',
  ];
  inprogress: string[] = [
    'Styling Kanban App',
    'To add delete functionality',
    'Pop Alert for confirmation',
  ];
  completed: string[] = ['Added scss', 'Dynamic Columns'];
}
