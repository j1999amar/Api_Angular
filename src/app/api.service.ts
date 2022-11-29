import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ) { }
  fetchDataPassenger=()=>{
    return this.http.get('https://api.instantwebtools.net/v1/passenger?page=0&size=30')
  }

  fetchDataPublic=()=>{
    return this.http.get('https://api.publicapis.org/entries')
  }
  fetchDataQutoes=()=>{
    return this.http.get('https://dummyjson.com/quotes')
  }
  fetchDataShopping=()=>{
    return this.http.get('https://dummyjson.com/products')
  } 
  fetchDataTodo=()=>{
    return this.http.get('https://dummyjson.com/todos')
  }
  fetchDataUs=()=>{
    return this.http.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
  }
  fetchDataUser=()=>{
    return this.http.get('https://dummyjson.com/users')
  }
  fetchDataUserData=()=>{
    return this.http.get('https://reqres.in/api/users?page=1')
  }

}
