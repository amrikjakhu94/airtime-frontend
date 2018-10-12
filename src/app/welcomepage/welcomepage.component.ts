import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ConfigService } from './config.service';
import { ApiService } from '../core/services/api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { JwtService } from '../core/services/jwt.service';

@Injectable()
@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css'],
})
export class WelcomepageComponent implements OnInit {

  loginForm : FormGroup;
  data$ : Object;
  loginData:Object;
  display : boolean = false;
  email: { user: any; };

  constructor(private apiService : ApiService,
              private fb : FormBuilder,
              private spinnerService: Ng4LoadingSpinnerService,
              private router : Router,
              private jwtservice : JwtService){
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
    let tk,user;
    this.spinnerService.show();
    // TODO: Use EventEmitter with form value
    // this.spinnerService.show();
    // this.data.signInRequest().subscribe(
    //   data => {
    //     console.log('fsdf');
    //   }
    // );
    this.loginData = {
      user:this.loginForm.value
    };
    this.email = {
      user:this.loginForm.value.email
    };
    //console.log(this.email);
    //console.log(this.loginData);
    this.apiService.signInRequest(this.loginData)
      .subscribe(
        // (response) => console.log(response),
        (response) => {
          console.log(response);
          const token = response['user']['token'];
          const username = response['user']['username'];
          this.jwtservice.saveToken(token);
          this.jwtservice.saveUsername(username); // Saving username in localStorage
          this.router.navigate(['/index']);
          this.spinnerService.hide();
        },
        (error) =>{
          console.log(error+'Error occured')
          this.showErrorDialog();
          this.spinnerService.hide();
          this.loginForm.reset();
        } 
    );

    //console.log(JSON.stringify(this.loginForm.value)+"Login details submitted successfully");
  }

  showErrorDialog(){
    this.display = true;
  }

  getPhotos(){
    this.spinnerService.show();
    this.apiService.getFotos().subscribe(
      data => {
        this.data$ = data;
        console.log(this.data$);
        this.spinnerService.hide();
      }
    );
  }
  ngOnInit() {
  }

}
