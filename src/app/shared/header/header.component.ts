import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../core/services/jwt.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser : string;
  username:string;
  constructor(private jwtservice : JwtService,
              private router : Router,
              private spinnerService : Ng4LoadingSpinnerService,
              private route : ActivatedRoute)
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
    this.jwtservice.destroyToken();
    this.router.navigate(['/']);
    this.spinnerService.hide();
  }

  ngOnInit() {
    this.loggedInUser=this.jwtservice.getUsername();
  }

}
