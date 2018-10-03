import { Component } from '@angular/core';
import { JwtService } from './core/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twi';

  constructor(private jwtservice : JwtService, router : Router){
    if(jwtservice.getToken()){
      router.navigate(['index'])
    }
    else{
      router.navigate([''])
    }
  }
}
