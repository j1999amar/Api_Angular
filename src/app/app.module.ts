import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { UsDataComponent } from './us-data/us-data.component';
import { PublicDataComponent } from './public-data/public-data.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ShoppingDataComponent } from './shopping-data/shopping-data.component';
import { UserComponent } from './user/user.component';
import { TodoDataComponent } from './todo-data/todo-data.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
const myRouter:Routes=[{
  path:"",
  component:PassengerDataComponent
},
{
  path:"usData",
  component:UsDataComponent
},
{
  path:"publicData",
  component:PublicDataComponent
},
{
  path:"shoppingData",
  component:ShoppingDataComponent
},
{
  path:"user",
  component:UserComponent
},
{
  path:"todoData",
  component:TodoDataComponent
},
{
  path:"quotesData",
  component:QuotesComponent
},{
  path:"userData",
  component:UserDataComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    UsDataComponent,
    PublicDataComponent,
    UserDataComponent,
    ShoppingDataComponent,
    UserComponent,
    TodoDataComponent,
    QuotesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
