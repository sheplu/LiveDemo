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

  constructor(private github: GithubService) { }

  ngOnInit() {
  }

  searchUser(): void {
    this.github.getUser(this.pseudo).subscribe(
      (data) => {
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

}
