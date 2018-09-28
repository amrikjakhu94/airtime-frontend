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

  constructor(private apiService : ApiService,
              private configService : ConfigService,
              private fb : FormBuilder,
              private data : ConfigService,
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

    console.log(this.loginData);
    this.apiService.signInRequest(this.loginData)
      .subscribe(
        // (response) => console.log(response),
        (response) => {
          const token = response['user']['token'];
          this.jwtservice.saveToken(token);
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
    this.data.getConfig().subscribe(
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
