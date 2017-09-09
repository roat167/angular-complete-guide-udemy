import { LoggingService } from './logging/logging.service';
import { Injectable, EventEmitter } from '@angular/core';

//Only need for receiving service, where it use other service
@Injectable()
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      
    statusUpdate = new EventEmitter<string>();
    
    constructor(private loggingservice: LoggingService) {}    

    addAccount(name: string, status: string) {
       this.accounts.push({name: name, status: status});
       this.loggingservice.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
       this.accounts[id].status = status;
       this.loggingservice.logStatusChange(status);
    }
}