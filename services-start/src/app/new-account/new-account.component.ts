import { AccountService } from './../account.service';
import { LoggingService } from './../logging/logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']  
})
export class NewAccountComponent {
  // using dependency injector, need to declar in constructor and register in component provider
  constructor(private logginService: LoggingService, private accountService: AccountService) {
    this.accountService.statusUpdate.subscribe(
      (status: string) => alert("New status " + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    //this.logginService.logStatusChange(accountStatus);    
  }
}
