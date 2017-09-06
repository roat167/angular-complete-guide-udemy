import { ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: ''
    };

    // using observable, to get inform of anychange on browser
    // asynchronous for thing that may happen in the future, without having to wait

    this.paramsSubscription = this.route.params.subscribe (
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );    
  }
  
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe;
  }

}
