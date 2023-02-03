import { Component } from '@angular/core';



@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  
  public deleteTask(index: number) {
    this.todo.splice(index, 1);
  }

}
