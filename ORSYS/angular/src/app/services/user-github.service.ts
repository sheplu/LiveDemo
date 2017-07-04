import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class UserGithubService {

  constructor(private http: Http) { }

  getUserDetails(value) {
  	return this.http.get('https://api.github.com/users/' + value + '?client_id=9533a9d8bd902f7bdd3e&client_secret=b35213730989cf7b72e758f2fcce9a78d908310a')
        .map((res: Response) => res.json())
  }

  getFollowList(value) {
  	return this.http.get('https://api.github.com/users/'+ value +'/followers?client_id=9533a9d8bd902f7bdd3e&client_secret=b35213730989cf7b72e758f2fcce9a78d908310a')
        .map((res: Response) => res.json())
  }
}
