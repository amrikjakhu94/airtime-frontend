import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { JwtService } from '../../core/services/jwt.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  loggedInUser: string;
  tweets: Object;

  constructor(private apiService : ApiService,
              private jwtservice : JwtService) { }

  ngOnInit() {
    this.loggedInUser=this.jwtservice.getUsername();
    // this.apiService.getMyTweets().subscribe(
    //   data => {this.tweets = data
    //   console.log(data);
    //   }
    // );
  }

}
