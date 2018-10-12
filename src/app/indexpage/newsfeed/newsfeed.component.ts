import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { JwtService } from '../../core/services/jwt.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  loggedInUser : string;
  tweetForm : FormGroup;
  newtweet : Object;
  constructor(fb : FormBuilder,
              private apiservice : ApiService,
              private spinnerservice : Ng4LoadingSpinnerService,
              private jwtservice : JwtService)
  {
    this.tweetForm = fb.group({
      "tweetdata" : ['',Validators.required]
    })
  }

  ngOnInit() {
    this.loggedInUser=this.jwtservice.getUsername();
    console.log(this.loggedInUser+' in newsfeed');
  }
  onSubmit(){
    this.newtweet = {
      body : this.tweetForm.value.tweetdata
    };
    //console.log(JSON.stringify(this.newtweet)+"Tweet data posted successfully");
    console.log(this.newtweet);
    this.apiservice.newTweetRequest(this.newtweet)
    .subscribe(
      (response) => {
        this.spinnerservice.show();
        console.log(response);
        // const email = response.email;
        // this.showsignupDialog(email);
        this.spinnerservice.hide();
      },
      (error) => {
        this.spinnerservice.show();
        console.log(error+'Error occured');
        this.spinnerservice.hide();
      }
  );
    this.tweetForm.reset();
  }
}
