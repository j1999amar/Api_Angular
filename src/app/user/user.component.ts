import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private api:ApiService){
    api.fetchDataUser().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  data: any =[]
}
