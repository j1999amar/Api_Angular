import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo-data',
  templateUrl: './todo-data.component.html',
  styleUrls: ['./todo-data.component.css'],
})
export class TodoDataComponent {
  constructor(private api:ApiService){
    api.fetchDataTodo().subscribe(
      (response)=>{
        this.data=response
      }
    )

  }
  data: any = []
}
