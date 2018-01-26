import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    return 'Jean';
  }

  getUserGithub(id) {
    return this.http.get(`http://api.github.com/users/${id}`);
  }

}
