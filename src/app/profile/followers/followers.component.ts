import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followersData : any;
  profileData: Object;
  constructor(private apiService : ApiService) { }

  getFollowers(){
    // this.apiService.getFollowersList().subscribe(
    //   (followers)=> {
    //     this.followersData = followers['followers']
    //     console.log(this.followersData,'service');
    //   }
    // )
    this.apiService.getProfileData().subscribe((data) => {
      this.followersData = data.followers;

      // this.apiService.getProfile().
      // subscribe(
      //   res => {
      //     console.log(res);
      //     this.apiService.sendProfileData(res);
      //     this.profileData = res;
      //   }  
      // );

      //console.log(this.followersData,'FROM behaviorSUBJECT');
    });
  }

  ngOnInit() {
    this.getFollowers();

  }

}
