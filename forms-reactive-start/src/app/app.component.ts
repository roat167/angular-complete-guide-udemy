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
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),      
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
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
}
