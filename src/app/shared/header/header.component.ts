import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../core/services/jwt.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser : Object;
  username:string;
  findFriendsList: any = [];
  constructor(private jwtService : JwtService,
              private router : Router,
              private spinnerService : Ng4LoadingSpinnerService,
              private route : ActivatedRoute,
              private apiService : ApiService)
              {
                this.route.params.subscribe(
                  params => {
                    params['username'];
                    this.username = params.username;
                    // console.log(this.username);
                  }
                )
              }

  destroyToken(){
    this.spinnerService.show();
    this.jwtService.destroyToken();
    this.router.navigate(['/']);
    this.spinnerService.hide();
  }

  findFriends(){
    console.log('Find friends');
    this.apiService.findFriends().subscribe(
      (findfriends)=>{
        this.findFriendsList = findfriends;
        console.log(this.findFriendsList);
      }
    )
  }

  ngOnInit() {
    //this.loggedInUser=this.jwtservice.getUsername();
    this.apiService.getProfile().subscribe(
      (res) => {
        this.loggedInUser = res;
      }  
    )
  }

}
