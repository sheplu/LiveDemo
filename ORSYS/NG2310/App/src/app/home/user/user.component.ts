import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GithubService } from "../../github.service";

import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: string;
  test: string;
  user : any;
  followers : any;
  pseudo: string;
  
  days: String[] =['lundi', 'mardi','mercredi'];

  constructor(private route : ActivatedRoute,
              private github : GithubService) { }


  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.id = params['id'];
      this.test = params['test'];
      console.log(this.id);
      console.log(this.test);
    });
 
    /*
    this.github.getUserGithub().flatMap(() => {
      return this.github.getUserGithubFollowers();
    }).subscribe((data) => {
      console.log(data);
    })*/

    this.github.getUserGithub().subscribe((data) => {
      console.log(data);
      this.github.getUserGithubFollowers().subscribe((value) => {
        console.log(value);
      })
    })
  
    /*
    this.github.getUserGithub().subscribe( (data) => {
      this.user = data;
    });
    this.github.getUserGithubFollowers().subscribe( (data) =>{
      this.followers = data
    })
    */
  }

  clickclick(): void {
    console.log('click');
  }






}
