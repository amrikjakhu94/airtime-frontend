import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://jsonplaceholder.typicode.com/photos';
  //configUrl = 'https://jsonplaceholder.typicode.com/comments';

  signInRequest(signIn:Object){
    //console.log(signIn+'Config service');
    //return this.http.post('https://ngapp-f3c2d.firebaseio.com/amrik.json',signIn);
    return this.http.post('https://airtime-api.herokuapp.com/api/users/login',signIn);
  }

  getConfig(){
    return this.http.get(this.configUrl);
  }

}
