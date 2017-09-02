import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  //selector: '.app-server', // <-- used as class name
  //selector: '[app-server]',  // <-- used as property name
  templateUrl: './server.component.html',
  styles: [`
    .online {
        color: white;
    }
  `]
})
export class ServerComponent { 
    serverId: number = 10;
    serverStatus: string = 'offline';    

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline' ;
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus ? 'red' : 'blue';
    }
}