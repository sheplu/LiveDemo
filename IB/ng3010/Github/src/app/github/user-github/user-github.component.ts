import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GithubService } from "./../../github.service";

@Component({
  selector: 'app-user-github',
  templateUrl: './user-github.component.html',
  styleUrls: ['./user-github.component.css']
})
export class UserGithubComponent implements OnInit {

  params : any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private github: GithubService
  ) { 
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.params = params;
        this.github.getUser(this.params.id).subscribe(
          (data) => {
            console.log(data);
            this.user = data;
          }
        )
      }
    );
    this.route.paramMap.subscribe( (data) => {
      console.log(data);
    })
  }

}
