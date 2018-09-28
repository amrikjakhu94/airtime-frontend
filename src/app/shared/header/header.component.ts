import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../core/services/jwt.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private jwtservice : JwtService,
              private router : Router,
              private spinnerService : Ng4LoadingSpinnerService) { }

  destroyToken(){
    this.spinnerService.show();
    this.jwtservice.destroyToken();
    this.router.navigate(['/']);
    this.spinnerService.hide();
  }

  ngOnInit() {
  }

}
