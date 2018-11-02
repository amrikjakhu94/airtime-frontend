import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../core/services/api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  providers: [MessageService]
})
export class ForgotpasswordComponent implements OnInit {

  forgotpasswordForm : FormGroup;
  message: any;

  constructor(private apiService : ApiService,
              private fb : FormBuilder,
              private spinnerService: Ng4LoadingSpinnerService,
              private messageService: MessageService) {
                
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
          this.message = response['sent'];
          console.log(this.message);
          this.showSuccess();
          this.spinnerService.hide();
        },
        (error) =>{
          console.log(error);
        } 
    );

  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Email sent', detail:'Click the link in email to set new password.'});
}


  ngOnInit() {
  }

}
