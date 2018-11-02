import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { JwtService } from '../../core/services/jwt.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  loggedInUser: string;
  tweets: any;
  display : boolean = false;
  editTweetForm : FormGroup;
  tweetData : Object;
  tweetId : String = '';
  likedByNames : any = [];
  showlikedby: boolean = false;
  likes: any;
  finalTweets: any = [];
  likedByItself : Boolean = false;

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
        this.finalTweets = [];
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
        this.tweets = result['mytweets'];
        this.loggedInUser = result['user'];
        this.tweets.forEach(element=>{
          this.likes = element['likedBy'];
          for(let i=0;i<this.likes.length;i++){
            this.likedByItself = this.loggedInUser == this.likes[i]._id;
          }
          if(this.likedByItself){
            this.finalTweets.push({ tweet : element , isLikedByMe : 'true' })
            //console.log('User liked its own post');
          }
          else{
            this.finalTweets.push({ tweet : element , isLikedByMe : 'false' })
          }
        });
        console.log(this.finalTweets);
      }
    );
  }

  likeTweet(id:String){
    this.apiService.likeTweet(id).subscribe(
      like=>{
        console.log(like);
        //this.finalTweets = [];
        //this.getTweets();
      }
    )
  }

  dislikeTweet(id:String){
    this.apiService.dislikeTweet(id).subscribe(
      dislike=>{
        console.log(dislike);
        //this.finalTweets = [];
        //this.getTweets();
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

  showlikedbyDialog(){
    this.showlikedby = true;
  }
  
  ngOnInit() {
    this.getTweets();
  }

}
