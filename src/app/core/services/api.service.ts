import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtService } from './jwt.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + window.localStorage.getItem('jwtToken')
  })
};
//headers.append('Content-Type', 'application/json; charset=utf-8');
//headers.append('Authorization', 'Bearer ' + this.storage.get(this.config.token.keyID));
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token: string;

  constructor(private http : HttpClient,
              private router : Router,
              private jwtservice : JwtService) { }

  fotosUrl = 'https://jsonplaceholder.typicode.com/photos';

  getFotos(){
    return this.http.get(this.fotosUrl);
  }

  signInRequest(signIn:Object){
    return this.http.post('https://airtime-api.herokuapp.com/api/users/login',signIn);
  }

  signUpRequest(signUp:Object):Observable<any>{
    return this.http.post('https://airtime-api.herokuapp.com/api/users/signup',signUp);
  }

  editProfileRequest(editProfile:Object){
    return this.http.put('https://airtime-api.herokuapp.com/api/users/signup',editProfile,httpOptions);
  }

  isAuthenticated(){
    this.token = this.jwtservice.getToken();
    return this.token != null;
  }

  getMyTweets(){
    return this.http.get('https://airtime-api.herokuapp.com/api/users/<username>/tweets');
  }

  newTweetRequest(newTweet:Object):Observable<any>{
    return this.http.post('https://airtime-api.herokuapp.com/api/tweets/create',{ tweet:newTweet }, httpOptions);
  }
  add(photo : Object){
    console.log('Enter photo service', photo);
  }

}
