import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getTweets(){
    return this.http.get('https://spotty-turtle-64.localtunnel.me/api/users/liam/tweets');
  }
}
