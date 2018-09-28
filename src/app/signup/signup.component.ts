import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from '../core/services/api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
//import 'rxjs/Rx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  display : boolean = false;
  email : string = '';
  signupForm : FormGroup;
  signupData: Object;

  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
        return { 'ageRange': true };
    }
    return null;
}

  constructor(private apiService : ApiService,
              private fb: FormBuilder,
              private spinnerService: Ng4LoadingSpinnerService) {
    this.signupForm = fb.group({
      "firstname" : ['',Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      "lastname" : ['',Validators.compose([
        Validators.required,
        Validators.minLength(3)
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
    //console.log(this.signupForm.value);
    //console.log(JSON.stringify(this.signupForm.value)+"Form submitted successfully");
    this.signupData = {
      user : this.signupForm.value
    };
    console.log(this.signupData);
    this.apiService.signUpRequest(this.signupData)
      .subscribe(
        (response) => {
          this.spinnerService.show();
          console.log(response);
          const email = response.email;
          this.showsignupDialog(email);
          this.spinnerService.hide();
        },
        (error) => {
          this.spinnerService.show();
          console.log(error+'Error occured');
          this.spinnerService.hide();
        }
    );
  }
  showsignupDialog(email : string){
    this.display = true;
    this.email=email;
  }
  ngOnInit() {
  }

}
