import {Ticketfields} from './ticketfields.model';

export class Ticket {

    id:number
    rev:number
    url:string
    fields:{"System.AssignedTo": string,"System.WorkItemType":string,"System.Title":string};

  constructor()
  {
      //this.fields=new Ticketfields();
  }
}
