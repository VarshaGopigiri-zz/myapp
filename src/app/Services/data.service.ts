import { Injectable } from '@angular/core';

import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";
import {IUserStory} from "../user-form/user-form.component";
import 'rxjs/add/operator/map';
import {Ticket} from './ticket.model';  
import{TicketList} from './ticket-list.model';
import {TaskListingComponent} from '../task-listing/task-listing.component';
//import 'src/app/Tasks.json';

@Injectable()
export class DataService {
 ticketlist:TicketList;

  constructor(public http:Http,public tasklistcomp:TaskListingComponent) {

    console.log("data service connected..");
   }

 sendRequests(ust :IUserStory)
 {
  let headers = new Headers({ 'Content-Type': 'application/json', 'Accept':'application/json'});
  let options = new RequestOptions({ headers: headers });

const body= ust;
//const body='test';

//let ticketlist = new TicketList();
//this.http.get('http://onboardtestapi.azurewebsites.net/api/TFSAPI/test').subscribe(res=>console.log(res));
//this.http.get('https://oauthtestapi.azurewebsites.net/oauth/requesttoken').subscribe(res=>console.log(res));
return this.http.post('http://onboardtestapi.azurewebsites.net/api/TFSAPI/CreateTasks',body,options).
 map(response=>response.json());


 }





private handleError(error: Response) {
  console.error(error);
  return Observable.throw(error.json().error || 'Server error');
}
}


