import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class GithubService {

  constructor(
    private http: Http,
    private httpC: HttpClient) { }

  getUser(): Observable<Object> {
    return this.http.get('https://api.github.com/users/sheplu')
      .map( (res: Response) => res.json());
  }

  getUserP(): Promise<Object> {
    return this.http.get('https://api.github.com/users/sheplu')
      .toPromise()
      .then( (response: Response) => {
        return response.json()
      });
  }

  getUserC(pseudo: String): Observable<User> {
    return this.httpC.get<User>(`https://api.github.com/users/${pseudo}?client_id=d8ac9a892682cfac681a&client_secret=9347b273d72b1bc491671b6588d2bf1717a67e4d`);
  }

  getFollowers(pseudo: String): Observable<Object> {
    return this.httpC.get<Array<User>>(`https://api.github.com/users/${pseudo}/followers?client_id=d8ac9a892682cfac681a&client_secret=9347b273d72b1bc491671b6588d2bf1717a67e4d`);
  }
}
