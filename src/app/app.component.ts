import { Component } from '@angular/core';
// import { DataService } from './Services/data.service';
// import { FormsModule } from '@angular/forms';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
// import { Observable } from "rxjs/Rx";
// import { DatepickerModule } from 'angular2-material-datepicker';
// import { DataTableModule } from 'angular-4-data-table';
// import { FormBuilder, FormGroup,Validators, FormControl,FormArray} from '@angular/forms';
// import { Ng4JsonEditorModule } from 'angular4-jsoneditor' ;
import { RouterModule, Routes,Router } from '@angular/router';
import {oauthresponse} from './oauthreponse.model';
import {token} from './token.model';
import {string,Format} from 'string-Format';
import { AngularUrlEncode } from 'angular-url-encode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

oauthres= new oauthresponse();

code:string;  
  constructor(private http:Http, private router:Router){

 console.log("connected");

  }
  
  ngOnInit():void {
    
  }

 

}
