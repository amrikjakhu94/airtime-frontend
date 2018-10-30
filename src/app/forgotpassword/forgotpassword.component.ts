import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../core/services/api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpasswordForm : FormGroup;

  constructor(private apiService : ApiService,
              private fb : FormBuilder,
              private spinnerService: Ng4LoadingSpinnerService,) {
                
    this.forgotpasswordForm = fb.group({
      "email" : ['',Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])]
    });
  }

  onSubmit() {

    console.log(this.forgotpasswordForm.value);
    this.apiService.forgotPasswordRequest(this.forgotpasswordForm.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.spinnerService.hide();
        },
        (error) =>{
          console.log(error);
        } 
    );

  }

  ngOnInit() {
  }

}
