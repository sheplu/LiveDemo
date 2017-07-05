import { Component, OnInit } from '@angular/core';

import { UserGithubService } from './user-github.service'

import { User } from './user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})

export class GithubComponent implements OnInit {
  pseudo = '';
  followers: any = '';
  selectedUser: string;
  choice = '';

  constructor(private userGithubService: UserGithubService) { }

  ngOnInit() {
  }

  getUserInfo(inputPseudo) {
    const user = new User(inputPseudo);
    this.userGithubService.getUserDetails(user)
      .subscribe(data => {
        this.selectedUser = data;
        this.choice = 'observable';
    });
    this.userGithubService.getUserFollowing(user)
      .subscribe(data => {
        this.followers = data;
    });
  }

  getUserInfoWithPromise(inputPseudo) {
    const user = new User(inputPseudo);
    this.userGithubService.getUserDetailsWithPromise(user)
      .then(_ => this.choice = 'promise');
    this.userGithubService.getUserFollowingWithPromise(user)
      .then(_ => this.choice = 'promise')
  }


}
