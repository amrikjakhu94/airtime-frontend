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
  loggedInUser : String;
  tweetForm : FormGroup;
  tweet : Object;
  tweetdata : String;
  loggedInToken: String;
  display : boolean = false;
  showlikedby : boolean = false;
  newsfeedTweets : any;
  likedByNames : any = [];

  page: number = 1;
  collection: any[] = this.newsfeedTweets;
  totalTweets: number;

    constructor(fb : FormBuilder,
                private apiService : ApiService,
                private spinnerService : Ng4LoadingSpinnerService,
                private jwtService : JwtService){

      this.tweetForm = fb.group({
        "tweetdata" : ['',Validators.required]
      });

    }

  setPageNo(page){
    this.page=page;
    this.getNewsfeed();
  }
  getNewsfeed(){
    this.apiService.getNewsfeed(this.page).subscribe(
      (newsfeed) => {
        if(newsfeed){
          this.newsfeedTweets = newsfeed['tweetData'];
          //this.totalTweets = newsfeed;
          console.log(this.newsfeedTweets);
          //console.log(this.totalTweets);
        }
      }
    )
  }

  getlikedBy(likedBy : any){
    console.log(likedBy);
      for(let i=0;i<likedBy.length;i++){
        this.likedByNames.push(likedBy[i].firstname +' '+likedBy[i].lastname );
      }
      this.showlikedbyDialog();
      console.log(this.likedByNames);
  }

  onSubmit(){
    this.tweet = {
        tweetdata : this.tweetForm.value.tweetdata
    };
    this.tweetdata = this.tweetForm.value.tweetdata;
    console.log(this.tweet);
    this.apiService.newTweetRequest(this.tweet)
    .subscribe(
      (response) => {
        this.shownewtweetDialog();
        this.spinnerService.show();
        console.log(response);
        this.spinnerService.hide();
      },
      (error) => {
        this.spinnerService.show();
        console.log(error+'Error occured12');
        this.spinnerService.hide();
      }
  );
    this.tweetForm.reset();
  }

  shownewtweetDialog(){
    this.display = true;
  }

  showlikedbyDialog(){
    this.showlikedby = true;
  }

  ngOnInit() {
    this.getNewsfeed();
  }

}
