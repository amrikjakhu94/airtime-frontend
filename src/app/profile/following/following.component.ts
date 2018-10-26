import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  followingData : any;
  display: boolean = false;
  unfollowName: any;
  profileData: Object;
  constructor(private apiService : ApiService) { }

  getFollowings(){
    // this.apiService.getFollowingList().subscribe(
    //   (following)=> {
    //     this.followingData = following['following']
    //     console.log(following);
    //   }
    // )
    this.apiService.getProfileData().subscribe((data) => {
      this.followingData = data.following;
      //console.log(this.followersData,'FROM behaviorSUBJECT');
    });
  }

  unfollow(id:String){
    this.apiService.unfollow(id).subscribe(
      (unfollow)=>{
        console.log(unfollow);
        this.getFollowings();
        this.showUnfollowDialog(unfollow);

        // this.apiService.getProfile().
        // subscribe(
        //   res => {
        //     console.log(res);
        //     this.apiService.sendProfileData(res);
        //     this.profileData = res;
        //   }  
        // );

      }
    )
  }

  showUnfollowDialog(unfollow : any){
    this.display = true;
    this.unfollowName = unfollow.unfollowed;
  }

  ngOnInit() {
    this.getFollowings();
  }

}
