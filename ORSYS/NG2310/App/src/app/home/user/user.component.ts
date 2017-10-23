import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GithubService } from "../../github.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: string;
  test: string;
  pseudo : string;

  constructor(private route : ActivatedRoute,
              private github : GithubService) { }


  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.id = params['id'];
      this.test = params['test'];
      console.log(this.id);
      console.log(this.test);
    });

    this.github.getUserGithub().subscribe( (data) => {
      this.pseudo = data.login;
      console.log(data);
    })
  }

}
