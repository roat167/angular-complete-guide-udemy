import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`, // <-- using inline with multiple lines
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreationStatus = "No Server was created";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['S1', 'S2'];

  constructor() { 
    //ES6 arrow function
    setTimeout( () => {
      this.allowServer = true;
    }, 
    2000);
  }

  ngOnInit() {
  }

  onCreateServer() { // <-- on good conversion for method that will be called on event binding
    this.serverCreationStatus = "Server was created, name is " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; // explicit tell event the type will be html input    
    //console.log(event);
    //Directives are instructions in the DOM
    // Component is kind of Directive with Templates
    // * for ngIf for structure directive, structural directive change the structure/form of app
  }
}
