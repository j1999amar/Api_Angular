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

@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    UsDataComponent,
    PublicDataComponent,
    UserDataComponent,
    ShoppingDataComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
