import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtService } from './jwt.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token: string;

  constructor(private http : HttpClient,
              private router : Router,
              private jwtservice : JwtService) { }

  getTweets(){
    return this.http.get('https://spotty-turtle-64.localtunnel.me/api/users/liam/tweets');
  }

  signInRequest(signIn:Object){
    return this.http.post('https://airtime-api.herokuapp.com/api/users/login',signIn);
  }

  signUpRequest(signUp:Object):Observable<any>{
    return this.http.post('https://airtime-api.herokuapp.com/api/users/signup',signUp);
  }

  editProfileRequest(editProfile:Object){
    return this.http.post('https://airtime-api.herokuapp.com/api/users/signup',editProfile);
  }
  isAuthenticated(){
    this.token = this.jwtservice.getToken();
    return this.token != null;
  }
}
