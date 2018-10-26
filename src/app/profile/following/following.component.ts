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
  constructor(private apiService : ApiService) { }

  getFollowings(){
    this.apiService.getFollowingList().subscribe(
      (following)=> {
        this.followingData = following['following']
        console.log(following);
      }
    )
  }

  unfollow(id:String){
    this.apiService.unfollow(id).subscribe(
      (unfollow)=>{
        console.log(unfollow);
        this.getFollowings();
        this.showUnfollowDialog(unfollow);
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
