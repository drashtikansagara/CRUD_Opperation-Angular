import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRemoveComponent } from './add-remove/add-remove.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddRemoveComponent,
    ShowdetailsComponent,
    EditDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
