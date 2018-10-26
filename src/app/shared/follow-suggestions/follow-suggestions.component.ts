import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-follow-suggestions',
  templateUrl: './follow-suggestions.component.html',
  styleUrls: ['./follow-suggestions.component.css']
})
export class FollowSuggestionsComponent implements OnInit {
  followsuggestions : Object;
  followName : Object;
  display : boolean = false;

  constructor(private apiservice : ApiService) { }

  getFollowSuggestions(){
      this.apiservice.getFollowSuggestions()
    .subscribe(
      (result) => {
        this.followsuggestions = result;
      },
      (error)=>{
        console.log('Error in getting follow suggestions');
      }
    )
  }

  follow(id:String){
    this.apiservice.follow(id).subscribe(
      (follow)=>{
        this.followName = follow;
        this.showfollowDialog();
        this.getFollowSuggestions();
      }
    )
  }

  showfollowDialog(){
    this.display = true;
  }

  ngOnInit() {
    this.getFollowSuggestions();
  }

}
