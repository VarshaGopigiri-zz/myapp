import { Component, OnInit } from '@angular/core';
import {Ticket} from '../Services/ticket.model';
import{TicketList} from '../Services/ticket-list.model';
 import { DataService } from '../Services/data.service';
 import { RouterModule, Routes,Router,ActivatedRoute } from '@angular/router';
 //import {RouteParams} from '@angular/router-deprecated';


@Component({
  selector: 'app-task-listing',
  templateUrl: './task-listing.component.html',
  styleUrls: ['./task-listing.component.css']
})
export class TaskListingComponent implements OnInit {

 tk:TicketList;
  constructor(private route:ActivatedRoute) { }
 
  ngOnInit() {

this.tk=JSON.parse(this.route.snapshot.params['elm']);
console.log(this.tk.value[0].url);
console.log(this.tk.value[0].fields["System.AreaPath"]);
//console.log(this.tk.value[0].fields.flag);


  }

// public getticketlist(ticketlist:TicketList){
//   let tk=new TicketList();
//  tk=ticketlist;
// }

}
