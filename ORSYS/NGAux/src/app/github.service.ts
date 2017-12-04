import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
// import { map } from "lodash";
import { config } from "./config";

@Injectable()
export class GithubService {

  constructor(
    private http: Http,
    private httpClient: HttpClient) { 
      console.log(config);
    }


  getUser(pseudo) {
    return this.httpClient
      .get(`https://api.github.com/users/${pseudo}`);
  }

  getUsers(pseudo) {
    return this.httpClient
      .get(`api/users`);
  }

  getUserFollowers(pseudo) {
    return this.httpClient
      .get(`https://api.github.com/users/${pseudo.login}/followers`);
  }
}
