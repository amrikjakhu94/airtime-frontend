import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followersData : any;
  constructor(private apiService : ApiService) { }

  getFollowers(){
    this.apiService.getFollowersList().subscribe(
      (followers)=> {
        this.followersData = followers['followers']
      }
    )
  }

  ngOnInit() {
    this.getFollowers();
    this.apiService.getProfileData().subscribe((data) => {
      console.log(data,'FROM SUBJECT');
    });
  }

}
