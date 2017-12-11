import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  id: any;
  user: Object;
  user2: Object;
  user3: Object;
  followers: any;

  color: String = 'white'; 

  filter: String = '-login'; 
  pseudo: String;
  formUser = {
    pseudo: ''
  };
  
  constructor(
    private route: ActivatedRoute,
    private github: GithubService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.id = params.id;

      this.github.getUserC(this.id).subscribe( (data) => {
        this.user3 = data;
      });

      this.github.getFollowers(this.id).subscribe( (data) => {
        this.followers = data;
      });
    });
    let id = this.route.snapshot.paramMap.get('id');
    this.github.getUser().subscribe( (data) => {
      this.user = data;
    });

    this.github.getUserP().then( (data) => {
      this.user2 = data;
    });  
    
    console.log(this.route.snapshot.data['resolvData']);
  }

  doClick(): void {
    this.router.navigate([`/contact/github/${this.pseudo}`]);
  }

  doSubmit(): void {
    console.log(this.formUser);
  }

  doSort(): void {
    if(this.filter === 'login') {
      this.filter = '-login';
    }
    else {
      this.filter = 'login';
    }
  }
}