import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = fb.group({
      "firstname" : ['',Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      "lastname" : ['',Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      "username" : ['',Validators.required],
      "email" : ['',Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])],
      "password" : ['',Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])]
    });

    // this.signupForm.valueChanges
    //                   .filter(data => this.signupForm.valid)
    //                   .map(data => {
    //                     data.lastUpdated = new Date();
    //                     return data;
    //                   })
    //                   .subscribe(data => {
    //                     console.log(JSON.stringify(data));
    //                   });
  }

  onSubmit(){
    console.log(JSON.stringify(this.signupForm.value)+"Form submitted successfully");
  }

  ngOnInit() {
  }

}
