import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private http : Http) { }

  getUser() : string {
    return "Jean";
  }

  getUserGithub() : any {
    return this.http.get('https://api.github.com/users/sheplu')
    .map( (res) => 
      res.json()
    )
  }

  getUserGithubFollowers() : any {
    return this.http.get('https://api.github.com/users/sheplu/followers')
    .map( (res) => 
      res.json()
    )
  }

}
