import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ConfigService } from './config.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css'],
})
export class WelcomepageComponent implements OnInit {
  loginForm : any;
  data$ : Object;
  
  constructor( private configService : ConfigService,fb : FormBuilder,private data : ConfigService,private spinnerService: Ng4LoadingSpinnerService) {
    this.loginForm = fb.group({
      "email" : ['',Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])],
      "password" : ['',Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])]
    });
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // this.spinnerService.show();
    // this.data.signInRequest().subscribe(
    //   data => {
    //     console.log('fsdf');
    //   }
    // );
    console.log(this.loginForm.value);
    this.configService.signInRequest(this.loginForm.value)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error+'Error occured')
    );

    //console.log(JSON.stringify(this.loginForm.value)+"Login details submitted successfully");
  }
  doGet(){
    this.spinnerService.show();
    this.data.getConfig().subscribe(
      data => {
        this.data$ = data;
        console.log(this.data$);
        //this.spinnerService.hide();
      }
    );
  }
  ngOnInit() {
  }

}
