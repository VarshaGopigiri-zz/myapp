import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { FormsModule } from '@angular/forms';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { DatepickerModule } from 'angular2-material-datepicker';
import { DataTableModule } from 'angular-4-data-table';
import { FormBuilder, FormGroup,Validators, FormControl,FormArray} from '@angular/forms';
import { Ng4JsonEditorModule } from 'angular4-jsoneditor' ;
//import { RouterModule, Routes,Router } from '@angular/router';

import { RouterModule, Routes,Router,ActivatedRoute } from '@angular/router';
import {Ticket} from '../Services/ticket.model';  
import{TicketList} from '../Services/ticket-list.model';
import {TaskListingComponent} from '../task-listing/task-listing.component';


export interface ITFSData
{
   tfsitems: ITfsItems[];
}

export interface ITfsItems{
  mainTask:string;
  subTasks: string[];
}

export interface IUserStory {
  serviceName: string;
  serviceOwner:string;
  tasks: ITask[];
}

export interface ITask {
  includeTask: boolean;
  taskOwner: string; 
  targetDate: string;
  taskName: string;
  description:string;
  //taskIdx: number;
}
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent  {

  ticketlist;
  elem:any;
  rForm;
  tsks:any;
  tasks_inputs:string[] = ["Azure Subscription management","Azure Subscription Access"];   
  
   inputs:any;
  
  constructor(private dataservice:DataService,private fb:FormBuilder,private http:Http,private router:Router,private route:ActivatedRoute) { 
    this.rForm=this.fb.group({
      serviceowner:[null,Validators.required],
      servicename:[null,Validators.required],
           tasksarray: [null]
         });
console.log("data service");
this.ticketlist = new TicketList();
//console.log(this.ticketlist.count);
//let ticketlist = new TicketList();

console.log(this.route.snapshot.queryParams['code']);

  }

  ngOnInit() :void{
    console.debug();
    this.http.get('../assets/Tasks.json').
    map(response=>response.json()).
    //subscribe(data => {console.log(data.tfsData)});
     subscribe( data=>{
       this.tsks=data.tfsData.tfsItems;
       err => console.log(err);
       () => console.log(this.tsks);

     this.rForm=this.fb.group({
    serviceowner:[null,Validators.required],
    servicename:[null,Validators.required],
     tasksarray: this.fb.array(this.createInitialTasks())
   });
 });
  }
  public createInitialTasks(): FormGroup[] {
    let taskArray = [];
    for(let i=0;i<this.tsks.length;i++)
    {
     // console.log(this.tsks[i]);
      taskArray.push(this.createTasks(this.tsks[i]));
    }
    return taskArray;
    
  }
  
  public createTasks(td:any): FormGroup {
    return this.fb.group({
        "taskOwner": ['', Validators.required],
        "includeTask": false,
        "targetDate": ['', Validators.required], 
        "taskName": [td.maintask],
       "subTasks": this.fb.array(td.subtasks),
  
    });
    
  };


  public onsubmit(inputs){
    let taskObject : IUserStory = {
      serviceName: this.rForm.controls.servicename.value,
      serviceOwner: this.rForm.controls.serviceowner.value,
      tasks: this.rForm.controls.tasksarray.value,
  }   
  let elm:any;
  this.dataservice.sendRequests(taskObject).subscribe(data=>{
    this.ticketlist=data;
   console.log(this.ticketlist);
   console.log(this.ticketlist.value[0].url);
   elm=JSON.stringify(this.ticketlist);
   console.log(elm);
   this.router.navigate(['/task-listing',elm]);
   //this.router.navigate(['/task-listing',{ queryParams: elm, skipLocationChange: true }]);
   });
   //{elem: JSON.stringify(this.ticketlist)}
  // console.log(this.ticketlist);
  //this.router.navigate(['/task-listing']);
  //   this.router.navigate(['/task-listing',elm]);
  }
}
