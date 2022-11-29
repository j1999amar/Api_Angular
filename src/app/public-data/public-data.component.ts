import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-data',
  templateUrl: './public-data.component.html',
  styleUrls: ['./public-data.component.css'],
})
export class PublicDataComponent {
 constructor(private api:ApiService){
  api.fetchDataPublic().subscribe(
    (response)=>{
      this.data=response
    }
  )

 }

  data: any =[]
}
