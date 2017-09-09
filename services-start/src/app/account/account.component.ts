import { AccountService } from './../account.service';
import { LoggingService } from './../logging/logging.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./new-account.component.css']  
  //, providers[LoggingService, AccountService] 
  // if you want different instance, otherwise u can use the same instance of service from app module
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;  

  constructor(private logginService: LoggingService, private accountService: AccountService) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.logginService.logStatusChange(status);
    this.accountService.statusUpdate.emit(status);
  }
}
