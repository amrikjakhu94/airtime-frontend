import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweets: Object;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    // this.apiService.getMyTweets().subscribe(
    //   data => {this.tweets = data
    //   console.log(data);
    //   }
    // );
  }

}
