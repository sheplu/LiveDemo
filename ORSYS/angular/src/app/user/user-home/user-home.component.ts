import { Component, OnInit } from '@angular/core';
import { User } from './../../classes/user';
import { UserGithubService } from './../../services/user-github.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})



export class UserHomeComponent implements OnInit {
  // https://api.github.com/users/sheplu
  // https://api.github.com/users/sheplu/followers
  // https://api.github.com/users/sheplu/repos
  selectedUser: any;
  followers: any;
  data: User[] = [];
  user: User = new User();
  constructor(private userGithubService: UserGithubService) { }

  ngOnInit() {
    this.getDetails('bob');
  }



  getDetails(value) {
      this.userGithubService.getUserDetails(value).subscribe(
        data => {
          this.selectedUser = data;
        }
      );
      this.userGithubService.getFollowList(value).subscribe(
        data => {
          this.followers = data;
        }
      );
    }

  addUser = function(value) {
    console.log(value);
    if (value.length > 0) {
      console.log(this.user);
      this.user.id = this.data.length;
      this.data.push(this.user);
      this.user = new User();
    }
  };
}
