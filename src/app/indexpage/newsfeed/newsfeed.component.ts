import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  tweetForm : FormGroup;
  newtweet : Object;
  constructor(fb : FormBuilder,
              private apiservice : ApiService,
              private spinnerservice : Ng4LoadingSpinnerService)
  {
    this.tweetForm = fb.group({
      "tweetdata" : ['',Validators.required]
    })
  }

  ngOnInit() {
  }
  onSubmit(){
    this.newtweet = {
      tweet : this.tweetForm.value
    };
    //console.log(JSON.stringify(this.newtweet)+"Tweet data posted successfully");
    //console.log(this.newtweet);
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
