import { Injectable } from '@angular/core';
import { Http  } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  result: any;

  constructor(private http: Http) { }

  getUser(pseudo): Observable<any> {
    return this.http.get(`http://api.github.com/users/${pseudo}`)
    .map((res) => res.json());
  }

  getFollowers(pseudo): Observable<any> {
    return this.http.get(`http://api.github.com/users/${pseudo}/followers`)
    .map((res) => res.json());
  }

  getUserP(pseudo) {
    const promise =  new Promise((resolve, reject) => {
      this.http.get(`http://api.github.com/users/${pseudo}`)
        .toPromise()
        .then(
          (res) => {
            this.result = res.json();
            resolve(this.result);
          },
          (err) => {
            reject(err)
          }
        )
    });
    return promise;
  }
}
