import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsername = ['Chris', 'Anna'];

  // trick using bind(this) to refer to object you want to refer to
  ngOnInit() { //control property
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), 
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this)),
      }),      
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => {console.log(value)}
    // );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    // populate Data
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray> this.signupForm.get('hobbies')).push(control); // casting to formArray
  }

  // create own validation
  // key value with return name boolean
  forbiddenNames(control: FormControl): {[st: string]: boolean} {
      if(this.forbiddenUsername.indexOf(control.value) !== -1) {
        return {'nameIsForbidden': true};
      }
      //return {'nameIsForbidden': false};
      return null;
  }

  // handle asynchronou validator
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>( 
      (resolve, reject) => {
        setTimeout(function() {
          if(control.value === 'test@test.com') {
            resolve({'emailIsForbidden': true});
          } else {
            resolve(null);
          }
        }, 1500); //1,5 sec
      }
    );

    return promise;
  }

}
