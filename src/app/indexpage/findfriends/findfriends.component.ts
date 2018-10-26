import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-findfriends',
  templateUrl: './findfriends.component.html',
  styleUrls: ['./findfriends.component.css']
})
export class FindfriendsComponent implements OnInit {
  frien
  findFriendsList: any;
  display: boolean = false;
  followName: Object;
  profileData: Object;
  constructor(private apiService : ApiService) { }

  findFriends(){
    console.log('Find friends');
    this.apiService.findFriends().subscribe(
      (findfriends)=>{
        this.findFriendsList = findfriends;
        console.log(this.findFriendsList);
      }
    )
  }

  follow(id:String){
    this.apiService.follow(id).subscribe(
      (follow)=>{
        this.followName = follow;
        this.showfollowDialog();
        
        this.apiService.getProfile().
        subscribe(
          res => {
            console.log(res);
            this.apiService.sendProfileData(res);
            this.profileData = res;
          }  
        );

      }
    );
  }

  showfollowDialog(){
    this.display = true;
  }

  ngOnInit() {
    this.findFriends();
  }

}
