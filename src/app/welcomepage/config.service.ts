import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'https://jsonplaceholder.typicode.com/photos';
  //configUrl = 'https://jsonplaceholder.typicode.com/comments';

  signInRequest(signIn: any[]){
    console.log(signIn+'Config service');
    return this.http.post('https://ngapp-f3c2d.firebaseio.com/data.json',signIn);
  }

  getConfig(){
    return this.http.get(this.configUrl);
  }
  constructor(private http: HttpClient) { }

}
