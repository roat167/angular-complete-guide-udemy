import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObservalSubscription: Subscription;
  customObservalSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // create observer: sendng number
    const myNumber = Observable.interval(1000)
      .map(
        (data: number) => {
          return data * 2;
        }
      ); // map data you get back and transform to your choice

    this.numberObservalSubscription = myNumber.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    // function in create should be asynchronous
    const myObservable = Observable.create(
      (observer: Observer<any>) => {
        setTimeout(
          () => {
            observer.next('first package');
          }, 2000);

        setTimeout(
          () => {
            observer.next('Second package');
          }, 4000);

        setTimeout(
          () => {
            //observer.error('This does not work');
            observer.complete();
          }, 5000);

        setTimeout(
          () => {
            observer.next('Third package');// this won't get fire, as the it was completed at 5 sec  
          }, 6000);
      }
    );

    this.customObservalSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },

      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy() { // manually cleanup observable 
    this.customObservalSubscription.unsubscribe();
    this.numberObservalSubscription.unsubscribe();
  }

}
