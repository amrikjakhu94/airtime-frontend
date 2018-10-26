import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { JwtService } from '../../core/services/jwt.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  loggedInUser: string;
  tweets: Object;
  display : boolean = false;
  editTweetForm : FormGroup;
  tweetData : Object;
  tweetId : String = '';
  likedByNames : any = [];
  showlikedby: boolean = false;

  constructor(private apiService : ApiService,
              private jwtService : JwtService,
              private router : Router,
              private fb: FormBuilder,) {

        this.editTweetForm = fb.group({
          "body" : ['']
        });

  }

  onSubmit(){
    this.display = false;
    this.editTweetForm.value;
    this.apiService.editedTweet(this.tweetId,this.editTweetForm.value).subscribe(
      (res) => {
        console.log('Tweet edited success');
        this.getTweets();
      }
    );
  }

  edittweet(id:String){
    this.apiService.getEditTweet(id).subscribe(
      (res) => {
        this.editTweetForm.patchValue(res);
      }
    )
    this.tweetId = id;
    console.log(id);
    this.tweetData =  this.editTweetForm.value;
    this.showsignupDialog();
  }

  deletetweet(id : String){
    this.apiService.deleteTweet(id).subscribe(
      data => {
        console.log(data);
        this.getTweets();
      }
    );
  }

  showsignupDialog(){
    this.display = true;
  }

  getTweets(){
    this.apiService.getMyTweets().subscribe(
      result => {
        this.tweets = result;
        console.log(this.tweets);
      }
    );
  }

  getlikedBy(likedBy : any){
    console.log(likedBy);
      for(let i=0;i<likedBy.length;i++){
        this.likedByNames.push(likedBy[i].firstname +' '+likedBy[i].lastname );
      }
      this.showlikedbyDialog();
      console.log(this.likedByNames);
  }

  showlikedbyDialog(){
    this.showlikedby = true;
  }
  
  ngOnInit() {
    this.getTweets();
  }

}
