import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shopping-data',
  templateUrl: './shopping-data.component.html',
  styleUrls: ['./shopping-data.component.css'],
})
export class ShoppingDataComponent {
  constructor(private api:ApiService){
    api.fetchDataShopping().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  data: any = []
}
