import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserGithubService {

  result: any;
  results: any;

  constructor(private http: Http) { }

  getUserDetails(user: User) {
    const url = `https://api.github.com/users/${user.pseudo}`;
    return this.http.get(url).map(
      (res: Response) => res.json()
    )
  }

  getUserFollowing(user: User) {
    const url = `https://api.github.com/users/${user.pseudo}/followers`;
    return this.http.get(url).map(
      (res: Response) => res.json()
    )
  }

  getUserDetailsWithPromise(user: User) {
    const url = `https://api.github.com/users/${user.pseudo}`;
    const promise = new Promise((resolve, reject) => {
      this.http.get(url)
        .toPromise()
        .then(
          res => {
            this.result = res.json();
            resolve();
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }

  getUserFollowingWithPromise(user: User) {
    const url = `https://api.github.com/users/${user.pseudo}/followers`;
    const promise = new Promise((resolve, reject) => {
      this.http.get(url)
        .toPromise()
        .then(
          res => {
            this.results = res.json();
            resolve();
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }
}
