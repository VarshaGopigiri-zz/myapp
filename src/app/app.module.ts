import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './Services/data.service';
import { HttpModule } from '@angular/http';
import { DatepickerModule } from 'angular2-material-datepicker';
// import { DataTableModule } from 'angular-4-data-table';
import { Ng4JsonEditorModule } from 'angular4-jsoneditor';
import { TaskListingComponent } from './task-listing/task-listing.component' ;
import { RouterModule, Routes } from '@angular/router';
import {string,Format} from 'string-Format';
import {AngularUrlEncode } from 'angular-url-encode';

import { UserFormComponent } from './user-form/user-form.component';





@NgModule({
  declarations: [
    AppComponent,
    TaskListingComponent,
   
    UserFormComponent
  ],
  imports: [
    BrowserModule,
   FormsModule,
   HttpModule,
   DatepickerModule,
  // DataTableModule,
   ReactiveFormsModule,
   Ng4JsonEditorModule,
   RouterModule.forRoot([
     {
       path:'task-listing/:elm',
       component:TaskListingComponent
     },
     {
       path:'user-form',
       component:UserFormComponent
     }
   ])

   
  ],
  providers: [DataService,TaskListingComponent,UserFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
