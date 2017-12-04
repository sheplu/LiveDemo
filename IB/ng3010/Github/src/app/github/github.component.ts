import { Component, OnInit } from '@angular/core';
import { GithubService } from "./../github.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  githubUser: any;
  followers: any[];
  pseudo: string;
  type: string;
  sortValue: string = 'name';

  constructor(private github: GithubService) { }

  ngOnInit() {
  }

  searchUser(): void {
    this.github.getUser(this.pseudo).subscribe(
      (data) => {
        this.type = 'Observable';
        this.githubUser = data;
        console.log(this.githubUser);
      }
    );
    this.github.getFollowers(this.pseudo).subscribe(
      (data) => {
        this.followers = data;
      }
    );
  };

  searchUserP(): void {
    this.github.getUserP(this.pseudo)
      .then( (data)  => {
        this.type = 'Promise';
        this.githubUser = data;
      });
  }

  changeSort(value) {
    this.sortValue = value;
    console.log(this.sortValue);
  }

}
