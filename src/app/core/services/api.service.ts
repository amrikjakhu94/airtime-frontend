import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtService } from './jwt.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


// let httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'x-auth-token': window.localStorage.getItem('jwtToken')
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token: string;
  loggedInUser : string;


  constructor(private http : HttpClient,
              private router : Router,
              private jwtservice : JwtService) { }

              
  private profile = new BehaviorSubject<any>(0);
  public myprofile = this.profile.asObservable();

  getProfileData(): Observable<any> {
    return this.profile.asObservable();
  }
  
  sendProfileData(data) {
    this.profile.next(data);
  }


  gethttpOptions(){
    let token = this.jwtservice.getToken();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-auth-token': token
      })
    };
    return httpOptions;
  }

  fotosUrl = 'https://jsonplaceholder.typicode.com/photos';

  getFotos(){
    return this.http.get(this.fotosUrl);
  }

  signInRequest(signIn:Object){
    //return this.http.post('https://airtime-api.herokuapp.com/api/users/login',signIn);
    return this.http.post('http://localhost:3000/signin',signIn);
  }

  signUpRequest(signUp:Object):Observable<any>{
    //return this.http.post('https://airtime-api.herokuapp.com/api/users/signup',signUp);
    //return this.http.post('http://localhost:2000/api/users/signup',signUp);
    return this.http.post('http://localhost:3000/signup',signUp);
  }

  findFriends():Observable<any> {
    let httpOptions = this.gethttpOptions();
    return this.http.get('http://localhost:3000/findfriends',httpOptions);
    //throw new Error("Method not implemented.");
  }

  editProfileRequest(){
    let httpOptions = this.gethttpOptions();
    return this.http.get('http://localhost:3000/editprofile',httpOptions);
  }

  editedProfileData(editedProfileData:Object){
    let httpOptions = this.gethttpOptions();
    return this.http.post('http://localhost:3000/editprofile',editedProfileData,httpOptions);
  }

  getProfile(){
    let httpOptions = this.gethttpOptions();
    return this.http.get('http://localhost:3000/profile',httpOptions);
  }

  isAuthenticated(){
    this.token = this.jwtservice.getToken();
    return this.token != null;
  }

  deleteTweet(id:String){
    let httpOptions = this.gethttpOptions();
    return this.http.delete(`http://localhost:3000/deletetweet/${id}`, httpOptions);
  }

  getEditTweet(id:String){
    let httpOptions = this.gethttpOptions();
    let tweetUrl = `http://localhost:3000/edittweet/${id}`;
    return this.http.get(tweetUrl,httpOptions);
  }

  editedTweet(id:String,data: Object){
    let httpOptions = this.gethttpOptions();
    return this.http.post(`http://localhost:3000/updatetweet/${id}`,data,httpOptions);
  }

  getMyTweets(){
    let httpOptions = this.gethttpOptions();
    this.loggedInUser=this.jwtservice.getUsername();
    let tweetUrl = 'http://localhost:3000/getmytweets';
    //return this.http.get('https://airtime-api.herokuapp.com/api/users/<username>/tweets');
    return this.http.get(tweetUrl,httpOptions);
  }

  newTweetRequest(newTweet:Object):Observable<any>{
    let httpOptions = this.gethttpOptions();
    //return this.http.post('https://airtime-api.herokuapp.com/api/tweets/create',{ tweet:newTweet }, httpOptions);
    //return this.http.post('http://localhost:2000/api/tweets/create',{ tweet:newTweet }, httpOptions);
    return this.http.post('http://localhost:3000/createtweet',newTweet, httpOptions);
  }

  add(photo : Object){
    console.log('Enter photo service', photo);
  }

  getNewsfeed(){
    let httpOptions = this.gethttpOptions();
    return this.http.get('http://localhost:3000/getnewsfeed',httpOptions);
  }

  getFollowSuggestions(){
    let httpOptions = this.gethttpOptions();
    return this.http.get('http://localhost:3000/getfollowsuggestions',httpOptions);
  }

  getFollowersList(){
    let httpOptions = this.gethttpOptions();
    return this.http.get('http://localhost:3000/getfollowerslist',httpOptions);
  }

  getFollowingList(){
    let httpOptions = this.gethttpOptions();
    return this.http.get('http://localhost:3000/getfollowinglist',httpOptions);
  }

  follow(id:String){
    let httpOptions = this.gethttpOptions();
    return this.http.get(`http://localhost:3000/followrequest/${id}`,httpOptions);
  }

  unfollow(id:String){
    let httpOptions = this.gethttpOptions();
    return this.http.get(`http://localhost:3000/unfollowrequest/${id}`,httpOptions);
  }

}
